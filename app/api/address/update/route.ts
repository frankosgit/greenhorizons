import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
    const supabase = createServerComponentClient( {cookies })

    try {
        const { data : { user }}  = await supabase.auth.getUser()
        if (!user) throw Error()

        const body = await req.body();

        const res = await prisma.addresses.update({
            where: { id: Number(body.addressId) },
            data: {
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
