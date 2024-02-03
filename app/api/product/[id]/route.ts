import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
    try {
        const { id } = context.params;

        const product = await prisma.products.findFirst({
            where: { id: Number(id) }
        });

        await prisma.$disconnect();

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
