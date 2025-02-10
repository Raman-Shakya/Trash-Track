"use client";

import Image from 'next/image';
import styles from './page.module.css'
import { useRef, useState, useEffect } from 'react';
import Nav from '../components/nav';

export default function Support() {
    const [openNav, setOpenNav] = useState(false);

    return <div>
        <Nav isOpen={openNav} closeNav={()=>setOpenNav(false)}/>
        <div className={styles.support}>

            <button onClick={() => setOpenNav(true)}>=</button>
            {/* <div className={styles.trademarkContainer}>
                <Image src={"/logo.png"} alt='logo' width={100} height={100}/>
                <h1>Trash <span>Track</span></h1>
                </div> */}
            <h2>Support</h2>
            <hr />
            <div className={styles.form}>
                {/* <label className={`${styles.label}`}>Choose Service</label> */}
                <select required className={`${styles.selector}`}>
                    <option>Select Service</option>
                    <option>Request Pickup</option>
                    <option>Request Pickup for Biodegradable</option>
                    <option>Request Pickup for Non-Biodegradable</option>
                    <option>Report Illegal Dumping</option>
                    <option>Schedule Urgent Pickup (Hazardous Waste)</option>
                    <option>Report Overfilled Public Bins</option>
                    <option>Recycling Request</option>
                    <option>Report Missed Collection</option>
                    <option>Complaint/Feedback</option>
                </select>
                <textarea placeholder='Add your description' className={`${styles.textArea}`}></textarea>
                <div className={styles.card}>
                    <label htmlFor='img-input'>
                        <Image src={"/upload.png"} alt='upload' width={130} height={130}/>
                        <p>Upload image</p>
                    </label>
                    <input id='img-input' type='file' accept='image/*' className={styles.input}></input>
                </div>
            </div>
            <div className={styles.submit}>
                <button>submit</button>
            </div>
        </div>
    </div>;
}