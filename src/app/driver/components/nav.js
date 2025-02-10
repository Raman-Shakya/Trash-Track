"use client";
import Link from 'next/link';
import styles from './nav.module.css'
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Nav({ isOpen, closeNav }) {
    
    return <nav className={`${styles.navWrapper} ${isOpen ? styles.active : ''}`}>
        <div className={`${styles.navbar}`} onClick={(e)=>e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeNav}>x</button>
            <div className={styles.trademarkContainer}>
                <Image src={"/logo.png"} alt='logo' width={150} height={150}/>
                <h1>Trash <span>Track</span></h1>
            </div>
            <hr/>
            <div className={styles.navWrapper}>
                <div className={styles.mainNav}>
                    <ul className={styles.navLists}>
                        <li><Link href="#" className={styles.active}>Home</Link></li>
                        <li><Link href="/household/support">Support</Link></li>
                        <li><Link href="#">Notification</Link></li>
                        <li><Link href="#">Notices</Link></li>
                    </ul>
                </div>
                <hr/>
                <ul className={styles.navLists}>
                    <li><Link href="#">Settings</Link></li>
                    <li><Link href="#">Help</Link></li>
                </ul>

            </div>
            
        </div>
    </nav>;
}