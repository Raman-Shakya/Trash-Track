"use client";

import { useRef, useState, useEffect } from 'react';
import Nav from '../household/components/nav';
import Map from '../household/components/map';
import Footer from '../household/components/footer';

import styles from "../household/page.module.css";
import Image from 'next/image';

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
                setOpenNav(true);
                setOpenFooter(false);
            }}
        >
            <Image src={"/hamburger.svg"} alt='hamburger' width={20} height={20}/>
        </button>
        <Nav isOpen={openNav} closeNav={()=>setOpenNav(false)}/>
        <div className={ styles.mapContainer }>
            <Map isDriver/>
        </div>
        <Footer isOpen={openFooter} openFooter={()=>setOpenFooter(true)} closeFooter={()=>setOpenFooter(false)} isDriver/>
    </div>;
}