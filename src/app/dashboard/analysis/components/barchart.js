"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

import styles from './barchart.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [dataset, setDataset] = useState([]);
    const labels = [
        "Request Pickup",
        "Request Pickup for Biodegradable",
        "Request Pickup for Non-Biodegradable",
        "Report Illegal Dumping",
        "Schedule Urgent Pickup (Hazardous Waste)",
        "Report Overfilled Public Bins",
        "Recycling Request",
        "Report Missed Collection",
        "Complaint/Feedback",
    ];

    useEffect(() => {
        fetch('/api/dashboard')
            .then(res => res.json())
            .then(data => {
                const temp = [];
                for (let i=0; i < labels.length; i++) {
                    temp.push(0);
                }
                
                for (let dat of data) {
                    for (let i=0; i<labels.length; i++) {
                        if (dat.petition_type==labels[i]) {
                            temp[i]++;
                        }
                    }
                }

                console.log(temp);
                setDataset(temp);
            })
    }, []);

    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            // display: true,
            // text: "Categories Management",
        },
        },
    };

    return <div style={{backgroundColor: "#f2efe9", marginTop: "50px", borderRadius: "10px"}}>
        <Bar data={{
            labels: labels,
            datasets: [
            {
                data: dataset,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.9)",
                    "rgba(54, 162, 235, 0.9)",
                    "rgba(255, 206, 86, 0.9)",
                    "rgba(75, 192, 192, 0.9)",
                    "rgba(153, 102, 255, 0.9)",
                    "rgba(255, 159, 64, 0.9)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1,
            },
        ],
    }} options={options} />
    </div>;
};

export default BarChart;
