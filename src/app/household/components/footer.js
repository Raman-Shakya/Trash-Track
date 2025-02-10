"use client";

import styles from './footer.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Footer({ isOpen, openFooter, closeFooter, status}) {

    const [speed, setSpeed] = useState(20);

    useEffect(() => {
        const interval = setInterval(() => {
            setSpeed(prev => {
                return prev + Math.random()*0.3 - 0.15});
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return <footer className={`${styles.footerWrapper}` } onClick={closeFooter}>
        <div className={`${styles.footer} ${isOpen ? styles.active : ''}`} onClick={(e)=>{
            e.stopPropagation()
            openFooter()
        }}>
            <div className={styles.title_div}>
                <h2 className={styles.heading}>Estimate time: <span>20 mins</span></h2>
                <div className={styles.status}>
                    { status==0 ? 'Waiting' : status==1 ? 'Approaching' : 'Dumped'}
                </div>
            </div>
            <hr></hr>
            <div className={styles.driver}>
                <p>Driver Name: <span>John Doe</span></p>
                <p>Contact Details: <span>9841003456</span></p>
            </div>
            <div className={styles.vehicle}>
                <p>Vehicle Number: <span>B AB0123</span></p>
                <p>Speed: <span>{parseInt(speed)}  km/h</span></p>
            </div>
        </div>
    </footer>;
}