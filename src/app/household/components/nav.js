"use client";
import styles from './nav.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Nav({ isOpen }) {
    
    return <nav className={`${styles.navWrapper} ${isOpen ? styles.active : ''}`}>
        <div className={`${styles.navbar}`} onClick={(e)=>e.stopPropagation()}>
            <a href="#">Home</a>
            <a href="#">Support</a>
            <a href="#">Notification</a>
            <a href="#">Contact</a>
        </div>
    </nav>;
}