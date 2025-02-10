import { NextResponse } from "next/server";
import db from "../dbConnection";
import Petition from "../models/petition";


export const GET = async (req, res) => {
    // const data1 = request?.nextUrl?.searchParams.get('data1');
    const data = await Petition.find({});
    console.log(data);


    return NextResponse.json(data);
}

// export const POST = async (req, res) => {
//     const reqBody = await req.json();
//     return NextResponse.json({})
// }

// export const PUT = async (req, res) => {
//     const reqBody = await req.json();
//     return NextResponse.json({})
// }

// export const DELETE = async (req, res) => {
//     const data1 = request?.nextUrl?.searchParams.get('data1');
//     return NextResponse.json({});
// }