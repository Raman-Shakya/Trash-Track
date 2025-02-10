"use client";

import { useRef, useState, useEffect } from 'react';
import Nav from './components/nav';
import Map from './components/map';
import Footer from './components/footer';

import styles from "./page.module.css";
import Image from 'next/image';

export default function Page() {
    const [openNav, setOpenNav] = useState(false);
    const [openFooter, setOpenFooter] = useState(false)

    return <div onClick={() => {
        setOpenNav(false);
        setOpenFooter(false);
    }}>
        <button 
            className={styles.hamburger}
            onClick={(e)=>{
                e.stopPropagation();
                setOpenNav(true);
                setOpenFooter(false);
            }}
        >
            <Image src={"/hamburger.svg"} alt='hamburger' width={30} height={30}/>
        </button>
        <Nav isOpen={openNav} closeNav={()=>setOpenNav(false)}/>
        <div className={ styles.mapContainer }>
            <Map/>
        </div>
        <Footer isOpen={openFooter} openFooter={()=>setOpenFooter(true)} closeFooter={()=>setOpenFooter(false)}/>
    </div>;
}