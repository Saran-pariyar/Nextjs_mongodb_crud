import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(request, {params}){
    const {id} = params

    const {newTitle : title, newDescription: description} = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "Topic updated"}, {status:200})
}

// RETURNS ONE DOCUMENT WITH MATCHING ID

//give with ID to use it like this: http://localhost:3000/api/topics/65793ae76d40e1706371d016
export async function GET(request, {params}){
    const {id}= params;
    await connectMongoDB();
    //we use "_id" because the id name is _id in Database
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic}, {status:200})
}