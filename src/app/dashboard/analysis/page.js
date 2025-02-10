"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, Circle } from "react-leaflet";
import { useRef, useState, useEffect } from 'react';

import styles from './page.module.css';
import BarChart from "./components/barchart";

const Page = ({location=[27.6933211,85.3004346]}) => {
    const [circles, setCircles] = useState(0);

    useEffect(() => {
        const temp = [];
        for (let i=0; i<40; i++) {
            temp.push([
                location[0] + Math.random()*0.2 - 0.1,
                location[1] + Math.random()*0.2 - 0.1,
                Math.random() * 1000 + 300
            ])
        }
        setCircles(temp);
    }, []);



    return (
        <div className={styles.wrapper}>
            <h1>Analytics</h1>
            <hr></hr>
            <div>
                <h2>Frequency of Pickup Requests</h2>
                <MapContainer style={{height:"500px", width:"100%"}} center={location} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        circles && circles.map((circle, index) => <Circle
                            key={index}
                            center={[circle[0], circle[1]]}
                            radius={circle[2]}
                            pathOptions={{ color: "#996666", fillColor: "#aa7777", fillOpacity: 0.6 }}
                        >
                        </Circle>)
                    }
                </MapContainer>
            </div>
            <hr></hr>
            <h2 className={styles.label}>Frequency of Reports</h2>
            <div>
                <BarChart />
            </div>
        </div>
    )
}

export default Page