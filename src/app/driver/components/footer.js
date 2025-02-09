"use client";

import styles from './footer.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Footer({ isOpen, openFooter, closeFooter}) {

    return <footer className={`${styles.footerWrapper}` } onClick={closeFooter}>
        <div className={`${styles.footer} ${isOpen ? styles.active : ''}`} onClick={(e)=>{
            e.stopPropagation()
            openFooter()
        }}>
            Estimate time:
        </div>
    </footer>;
}