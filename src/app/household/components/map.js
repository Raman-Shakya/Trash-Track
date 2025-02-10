'use client';

import React, { useCallback, useState } from 'react'
import Map from '../../components/map';

const MapContainer = ({isDriver, state, setState}) => {
    /*
        0 - idle state - waiting for dump truck
        1 - got proximity warning - dump truck is near
        2 - dumped - truck leaves
    */

    const notify = useCallback((st) => {
        setState((prevState) => {
            if (st) return 1; // Proximity warning
            if (!st && prevState === 1) return 2; // Dumped
            return prevState; // No change
        });
    }, []);

    return (
        <div>
            <Map state={state} notifyFunc={notify} isDriver={isDriver} />
        </div>
    )
}

export default MapContainer;
