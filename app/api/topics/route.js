import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


//send data to db, now if we use http://localhost:3000/api/topics in thunder client, provide json data with title and description property inside, it will send the data in mongoDB
export async function POST(request){
    const {title, description} =  await request.json();
    await connectMongoDB();
    await Topic.create({title,description})
    return NextResponse.json({message: "Topic created"}, {status:201})
}

//GET REQUEST
// get list of all data:  http://localhost:3000/api/topics
export async function GET(){
    await connectMongoDB();
 const topics =    await Topic.find();
 return NextResponse.json({topics})
}

//DELETE
// use delete request, give id in params.It will be deleted.
export async function DELETE (request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id)
    
    return  NextResponse.json({message: "Topic deleted"}, {status: 200})
}