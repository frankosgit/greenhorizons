import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { error } from "console";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
    const supabase = createServerComponentClient( {cookies })

    try {
        const { data : { user }}  = await supabase.auth.getUser()
        if (!user) throw Error()

        const body = await req.body();

        const orders = await prisma.orders.create({
            data: {
                user_id: user?.id,
                stripe_id: body.stripe_id,
                name: body.name,
                email: body.email,
                address: body.address,
                zip: body.zip,
                city: body.city,
                country: body.country,
                state: body.state,
                total: Number(body.total)
            }
        })

        body.products.forEach(async (prod: {id: string }) => {
            await prisma.orderItems.create({
                data: {
                    order_id: orders.id,
                    product_id: Number(prod.id)
                }
            })
        })
          

        await prisma.$disconnect();
        return NextResponse.json('Order complete', { status: 200})

    } catch(error) {
        console.log(error)
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 })
    }
}
