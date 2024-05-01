import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { email } = await req.json()

    const emailExit = await prisma.email.findUnique({
        where: {
            email: email
        }
    })

    if (emailExit) {
        return new NextResponse(JSON.stringify({ message: "Email already exists" }), { status: 400 });
    }
    try {
        const emailExists = await prisma.email.create({
            data: {
                email: email
            }
        })
        return new NextResponse(JSON.stringify({ message: "Email sent" }), { status: 200 });

    }
    catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!"+ err }),
            { status: 500 }
        );
    }
}

export const GET = async () => {
    try {

        const emails = await prisma.email.findMany()

        return new NextResponse(JSON.stringify(emails), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!"+ err }),
            { status: 500 }
        );
    }

};