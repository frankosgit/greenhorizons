import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { error } from "console";

export async function GET(req: NextRequest) {
    const supabase = createServerComponentClient( {cookies })

    try {
        const { data : { user }}  = await supabase.auth.getUser()
        if (!user) throw Error()

        const orders = await prisma.orders.findMany({
            where: {user_id: user?.id},
            orderBy: {id: "desc"},
            include: {
                order_items: {
                    include: {
                        products: true
                    }
                }
            }

        })

        await prisma.$disconnect();
        return NextResponse.json(orders)

    } catch(error) {
        console.log(error)
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 })
    }
}
