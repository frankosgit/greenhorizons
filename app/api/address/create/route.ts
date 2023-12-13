import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { error } from "console";

export async function POST(req: any) {
    const supabase = createServerComponentClient( {cookies })

    try {
        const { data : { user }}  = await supabase.auth.getUser()
        if (!user) throw Error()

        const body = await req.json();

        const res = await prisma.addresses.create({
            data: {
                user_id: user?.id,
                state: body.state,
                name: body.name,
                address: body.address,
                zip : body.zipcode,
                city: body.city,
                country: body.country
            }
        })

        await prisma.$disconnect();
        return NextResponse.json(res)

    } catch(error) {
        console.log(error)
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 })
    }
}
