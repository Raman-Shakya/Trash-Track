"use client";

import styles from './footer.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Footer({ isOpen, openFooter, closeFooter, status}) {

    return <footer className={`${styles.footerWrapper}` } onClick={closeFooter}>
        <div className={`${styles.footer} ${isOpen ? styles.active : ''}`} onClick={(e)=>{
            e.stopPropagation()
            openFooter()
        }}>
            <div className={styles.div}>
                <h2 className={styles.heading}>Estimate time: <span>20mins</span></h2>
                <div className={styles.status}>
                    { status==0 ? 'Waiting' : status==1 ? 'Approaching' : 'Dumped'}
                </div>
            </div>
            <div>
                Driver name: Smriti Maharjan <br/>
                Contact Details: 
            </div>
        </div>
    </footer>;
}