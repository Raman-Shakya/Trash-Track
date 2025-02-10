import { NextResponse } from "next/server";
import db from "../dbConnection";
import Petition from "../models/petition";


export const GET = async (req, res) => {
    // const data1 = request?.nextUrl?.searchParams.get('data1');
    const data = await Petition.find({});
    console.log(data);


    return NextResponse.json(data);
}

export const POST = async (req, res) => {
    const { petition_type, description, location, image } = await req.json();
    
    const newRecord = new Petition({
        user_id: Math.random()*500,
        location: location,
        image: image,
        petition_type: petition_type,
        description: description,
        status: 'pending',
        votes: 0
    });

    const record = await newRecord.save();
    
    return NextResponse.json(record);
}

// export const PUT = async (req, res) => {
//     const reqBody = await req.json();
//     return NextResponse.json({})
// }

// export const DELETE = async (req, res) => {
//     const data1 = request?.nextUrl?.searchParams.get('data1');
//     return NextResponse.json({});
// }