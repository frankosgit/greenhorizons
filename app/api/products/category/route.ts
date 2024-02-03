    import prisma from "@/app/lib/prisma";
    import { NextRequest, NextResponse } from "next/server";

    export async function GET(req: NextRequest, context: { params: { category: string } }) {
        try {
            const { category } = context.params;
            const products = await prisma.products.findMany({
                where: { category: category }
            });
            await prisma.$disconnect();
            return NextResponse.json(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            await prisma.$disconnect();
            return new NextResponse('Something went wrong', { status: 400 });
        }
    }
