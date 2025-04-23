import { NextRequest } from "next/server";

export async function Post (req:NextRequest){
    const {} = await req.json()
}