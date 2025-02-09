"use client";

import styles from './footer.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Footer() {
    
    const [openFooter, setOpenFooter] = useState(false)

    return <footer className={`${styles.footerWrapper}` } onClick={()=>setOpenFooter(false)}>
        <div className={`${styles.footer} ${openFooter ? styles.active : ''}`} onClick={(e)=>{
            e.stopPropagation()
            setOpenFooter(true)
            }}>
            Estimate time:
        </div>
    </footer>;
}