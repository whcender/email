import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { email } = await req.json()

    try {
        const emailExists = await prisma.email.findFirst({
            where: {
                email: email
            }
        })
        return new NextResponse(JSON.stringify({ message: "Email sent" }), { status: 200 });

    }
    catch (e) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );


    };
}

    export const GET = async (req: NextRequest) => {
        const emails = await prisma.email.findMany()

        return new NextResponse(JSON.stringify(emails), { status: 200 });
    };