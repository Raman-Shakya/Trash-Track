"use client";

import { useRef, useState, useEffect } from 'react';
import Nav from './components/nav';
import Map from '../components/map';
import Footer from './components/footer';

export default function Page() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(()=>{console.log(openNav)},[openNav])

    return <div>
        <button onClick={()=>{setOpenNav(true)}}>=</button>
        <Nav isOpen={openNav} closeNav={()=>setOpenNav(false)}/>
        <Map/>
        <Footer/>
    </div>;
}