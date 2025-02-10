"use client";

import Card from './components/card'
import styles from './page.module.css'
import { useRef, useState, useEffect } from 'react';

export default function Dashboard() {
    return <div className={styles.card}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>;
}