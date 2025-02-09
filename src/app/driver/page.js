"use client";

import { useRef, useState, useEffect } from 'react';
import Nav from './components/nav';
import Map from '../components/map';
import Footer from './components/footer';

import styles from "./page.module.css";

export default function Page() {
    const [openNav, setOpenNav] = useState(false);
    const [openFooter, setOpenFooter] = useState(false)

    useEffect(()=>{console.log(openNav)},[openNav])

    return <div onClick={() => {
        setOpenNav(false);
        setOpenFooter(false);
    }}>
        <button 
            className={styles.hamburger}
            onClick={(e)=>{
                e.stopPropagation();
                setOpenNav(true)}
            }
        >=</button>
        <Nav isOpen={openNav} closeNav={()=>setOpenNav(false)}/>
        <div className={ styles.mapContainer }>
            <Map isDriver/>
        </div>
        <Footer isOpen={openFooter} openFooter={()=>setOpenFooter(true)} closeFooter={()=>setOpenFooter(false)}/>
    </div>;
}