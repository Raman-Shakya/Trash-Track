"use client";
import Maps from "../components/map.js"
import Login from "../components/login.js"
import { useRef, useState, useEffect } from 'react';

export default function Map() {
    return<>
     <div style={{height: "399px", width: "231px"}}>
        <Maps />
    </div>
        <Login />
    </>
}