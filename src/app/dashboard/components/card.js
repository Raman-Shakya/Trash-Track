"use client";

import styles from './card.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Card({ petition }) {
    const [showPetition, setShowPetition] = useState(false);

    return <div className={styles.card} onClick={() => setShowPetition(true)}>
        <div  className={styles.cardContent}>
            {petition.petition_type}
        </div>
        <div>
            <div className={
                `${(petition.status === "pending" ? styles.yellow :
                petition.status === "approved" ? styles.green:
                petition.status === "rejected" ? styles.red:
                petition.status === "resolved" ? styles.green:
                styles.blue)} ${styles.status}`
            }></div>
        </div>

        {showPetition &&
            <div className={styles.popupContainer} onClick={(e) => {e.stopPropagation(); setShowPetition(false)}}>
                <div className={styles.popup} onClick={(e) => {e.stopPropagation(); setShowPetition(true)}}>
                    <h1>{petition.type}</h1>
                    <p>Status: {petition.satus}</p>
                    <p>Description: {petition.description}</p>
                    <p>Votes: {petition.vote}</p>
                </div>            
            </div>
        }
    </div>;
}