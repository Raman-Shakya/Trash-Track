"use client";

import { useRef, useState, useEffect } from 'react';
import Nav from './components/nav';
import Map from './components/map';
import Footer from './components/footer';

import styles from "./page.module.css";
import Image from 'next/image';

export default function Page() {
    const [openNav, setOpenNav] = useState(false);
    const [openFooter, setOpenFooter] = useState(false);
    const [state, setState] = useState(0);

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
            <Map state={state} setState={setState}/>
        </div>
        <Footer isOpen={openFooter} status={state} openFooter={()=>setOpenFooter(true)} closeFooter={()=>setOpenFooter(false)}/>
    </div>;
}