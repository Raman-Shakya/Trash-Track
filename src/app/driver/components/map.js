'use client';

import React, { useCallback, useState } from 'react'
import Map from '../../components/map';

const MapContainer = () => {
    /*
        0 - idle state - waiting for dump truck
        1 - got proximity warning - dump truck is near
        2 - dumped - truck leaves
    */
    const [state, setState] = useState(0);

    const notify = useCallback((st) => {

        console.log("sakdjaldksj");
        setState((prevState) => {
            if (st) return 1; // Proximity warning
            if (!st && prevState === 1) return 2; // Dumped
            return prevState; // No change
        });
    }, []);

    return (
        <div>
            <Map state={state} notifyFunc={notify} />
        </div>
    )
}

export default MapContainer;
