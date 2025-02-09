"use client";

import { useRef, useState, useEffect } from 'react';

export default function Support() {
    return <div>
        <div>
            <label>Choose Service</label>
            <select required>
                <option>Select</option>
                <option>Request Pickup</option>
                <option>Report Illegal Dumping</option>
                <option>Schedule Urgent Pickup (Hazardous Waste)</option>
                <option>Report Overfilled Public Bins</option>
                <option>Recycling Request</option>
                <option>Report Missed Collection</option>
                <option>Complaint/Feedback</option>
            </select>
        </div>
        <div>
            <textarea placeholder='description'></textarea>
        </div>
        <div>
            <input type='file' accept='image/*'></input>
        </div>
    </div>;
}