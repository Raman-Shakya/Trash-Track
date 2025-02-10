"use client";

import Image from 'next/image';
import styles from './page.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Support() {
    return <div className={`${styles.support}`}>
        <div>
            <label className={`${styles.label}`}>Choose Service</label>
            <select required className={`${styles.selector}`}>
                <option>Select</option>
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
        </div>
        <div>
            <textarea placeholder='description' className={`${styles.textArea}`}></textarea>
        </div>
        <div className={styles.card}>
            <label htmlFor='img-input'>
                <Image src={"/upload.png"} alt='upload' width={150} height={150}/>
            </label>
            <input id='img-input' type='file' accept='image/*' className={styles.input}></input>
        </div>
    </div>;
}