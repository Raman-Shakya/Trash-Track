"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, Circle } from "react-leaflet";
import { useRef, useState, useEffect } from 'react';

// const waypoints = [[27.6933211,85.3004346], [27.695020, 85.310076], [27.693513, 85.310319], [27.6939009,85.3003921], [27.6933211,85.3004346]]
const waypoints = [[27.693207, 85.301712], [27.696200, 85.307259], [27.693150, 85.304555]]
function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

const truckIcon = new L.Icon({
    iconUrl: "./dumpTruckIcon.png", // Replace with your icon URL
    iconSize: [60, 60], // Size of the icon
    iconAnchor: [30, 30], // Point of the icon that corresponds to marker's location
    popupAnchor: [0, -40], // Point where the popup should open relative to iconAnchor
});


const ZoomPosition = () => {
    const mapObject = useMap();

    useEffect(() => {
        mapObject.zoomControl.setPosition('topright');
    }, [])
}

export default function Map({ location=[27.6933211,85.3004346], isDriver=false, state=0, notifyFunc }) {
    const [isClient, setIsClient] = useState(false);
    const [route, setRoute] = useState([]);
    const [truckPos, setTruckPos] = useState({lat:0, lon:0});
    const [radius, setRadius] = useState(100);
    // const { sendMessage, lastMessage, readyState } = useWebSocket('http://localhost:4000');
    

    useEffect(() => {
        setIsClient(true); // Ensures the map only renders on the client
    }, []);

    useEffect(() => {
        if (route.length > 0) {
            startSim();
        }
    }, [route]);

    useEffect(() => {
        if (isDriver) return;

        const distance = ((location[0]-truckPos.lat)**2 + (location[1]-truckPos.lon)**2)**.5;
        // console.log(distance*1000*100, radius);
        if (notifyFunc)
            notifyFunc(distance*1000*100 < radius);
        // if (distance*1000*100 < radius) {
        // }
        // notify(0);
    }, [truckPos]);


    function startSim() {
        var distance = 0;
        var delta = 0.00001;

        const interval = setInterval(() => {
            distance += delta;
            if (distance < 0) {
                distance = 0;
                delta *= -1;
            }
            for (let i=0; i<route.length; i++) {
                if (route[i].dist > distance) {
                    const fraction = (distance - route[i-1].dist) / (route[i].dist - route[i-1].dist);
                    
                    const lat = route[i-1].lat + fraction*(route[i].lat - route[i-1].lat)
                    const lon = route[i-1].lon + fraction*(route[i].lon - route[i-1].lon)
                    setTruckPos({lat: lat, lon: lon});
                    return;
                }
            }
            delta *= -1;
        }, 100);
    }


    useEffect(() => {
        const fetchRoute = async () => {
        const url = `http://router.project-osrm.org/route/v1/car/${(waypoints.map((waypoint)=>`${waypoint[1]},${waypoint[0]}`)).join(';')}?alternatives=true&steps=true&geometries=geojson&overview=full&annotations=true`

        try {
            const response = await fetch(url);
            const data = await response.json();

            const coordinates = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
            
            const routeDesc = [{ lat: coordinates[0][0], lon: coordinates[1][1], dist: 0}];
            for (let i=1; i<coordinates.length; i++) {
                const distance = ((coordinates[i][0] - coordinates[i-1][0])**2 + (coordinates[i][1] - coordinates[i-1][1])**2)**.5;

                routeDesc.push({
                    lat: coordinates[i][0],
                    lon: coordinates[i][1],
                    dist: routeDesc[i-1].dist + distance
                });
            }
            setRoute(routeDesc);
        } catch (error) {
            console.error("Error fetching route:", error);
        }
        };

        fetchRoute();
    }, []);


    if (!isClient) return <p>Loading map...</p>;    
    return( 
        <MapContainer style= {{height:"100vh", width:"100vw"}} center={location} zoom={isDriver ? 24 : 15} scrollWheelZoom={true}>
            { isDriver && <ChangeView center={[truckPos.lat, truckPos.lon]} /> }
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomPosition />
            <Circle 
                center={truckPos} 
                radius={radius} // Radius in meters (1 km)
                pathOptions={{ color: "lightblue", fillColor: "lightblue", fillOpacity: 0.6 }}
            >
            </Circle>
            {
                !isDriver && 
                <Marker position={location}>
                    <Popup>
                        {
                            state==0 ? "Waiting for dump truck":
                            state==1 ? "Dump Truck is nearing":
                            state==3 ? "Dump Truck left": "Dumped Garbage"
                        }
                    </Popup>
                </Marker>
            }
            <Marker position={truckPos} icon={truckIcon}></Marker>
            {route.length > 0 && <Polyline positions={route} color="blue" weight={4} />}
        </MapContainer>
    );
}