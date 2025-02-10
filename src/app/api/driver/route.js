import { NextResponse } from "next/server";
import db from "../dbConnection";
import petition from "../models/petition";

export const GET = async (req) => {
    const descriptionList = [
        "",
        "Garbage has been piling up in this area for weeks, attracting stray animals and causing a terrible smell.",
        "The public dustbin here is broken, and people have started dumping trash on the street instead.",
        "There is an illegal landfill forming near the riverbank, polluting the water source for nearby residents.",
        "A factory nearby has been dumping waste into the drainage system, leading to severe water contamination.",
        "Despite multiple complaints, the garbage collection service hasn't been active in this neighborhood.",
        "Plastic waste is scattered all over the local park, making it unsafe for children to play.",
        "A waste management truck spilled garbage on the main road and left it uncleaned.",
        "Burning of plastic waste in this area is causing harmful smoke, affecting the health of locals.",
        "The community recycling center has been shut down without any notice, leading to waste mismanagement.",
        "Street vendors are dumping food waste directly into the drainage, leading to blockages and bad odors.",
        "The landfill in this zone is overcapacity, yet authorities are not taking any action.",
        "Illegal dumping of electronic waste is happening in this alley, causing hazardous conditions.",
        "A public toilet nearby is not being cleaned, and waste is overflowing onto the streets.",
        "Medical waste, including used syringes and gloves, has been dumped near a residential area.",
        "The compost bin in the community garden has been neglected, and organic waste is rotting in the open.",
        "Large-scale dumping of construction debris is blocking the sidewalk, creating an inconvenience for pedestrians.",
        "A local business is secretly dumping hazardous chemicals into the nearby field at night.",
        "Recyclable materials are not being collected separately, leading to unnecessary landfill waste.",
        "A sewage leak is mixing with waste in the area, leading to serious hygiene concerns.",
        "The garbage collection schedule is inconsistent, leading to unpredictable waste accumulation.",
    ];
    const statusList = ['pending', 'approved', 'rejected', 'resolved'];
    const petitionTypeList = [
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

    const report = [];
    // for (let i=1; i<100; i++) {
    //     const temp = new petition({
    //         user_id: i, 
    //         petition_type: petitionTypeList[parseInt((petitionTypeList.length-1) * Math.random())], 
    //         status: statusList[parseInt((statusList.length-1) * Math.random())], 
    //         votes: parseInt(Math.random()*100), 
    //         location: {
    //             latitude: 28.999 + (Math.random()*0.2 - 0.1), 
    //             longitude: 87.999 + (Math.random()*0.2 - 0.1)
    //         }, 
    //         description: descriptionList[parseInt((descriptionList.length-1) * Math.random())], 
    //         image_url: "https://source.unsplash.com/600x400/?garbage,collection"
    //     })
    //     await temp.save();
    //     report.push(temp);
    // }

    // temp.save();

    return NextResponse.json(report);
}