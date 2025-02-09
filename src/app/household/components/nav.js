"use client";
import Link from 'next/link';
import styles from './nav.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Nav({ isOpen }) {
    
    return <nav className={`${styles.navWrapper} ${isOpen ? styles.active : ''}`}>
        <div className={`${styles.navbar}`} onClick={(e)=>e.stopPropagation()}>
            <Link href="#">Home</Link>
            <Link href="/household/support">Support</Link>
            <Link href="#">Notification</Link>
            <Link href="#">Notices</Link>
        </div>
    </nav>;
}