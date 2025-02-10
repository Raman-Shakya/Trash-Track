"use client";

import Card from './components/card'
import styles from './page.module.css'
import { useRef, useState, useEffect } from 'react';


export default function Dashboard() {
    const [petitions, setPetitions] = useState([]);
    
    useEffect(()=> {
        fetch('/api/dashboard')
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 15) {
                    setPetitions(data.slice(0, 15));
                }
                else {
                    setPetitions(data);
                }
                console.log(data[0])
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])
    
    return <div className={styles.mainWrapper}>
        <h1>Petitions</h1>
        <hr></hr>
        <div className={styles.cardDiv}>
            { petitions.map((petition, index) => <Card key={index} petition={petition} />)}
        </div>
    </div>;
}