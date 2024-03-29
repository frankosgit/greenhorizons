import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()


  const supabase = createMiddlewareClient({ req, res })

  const { data } = await supabase.auth.getSession()
  
  if (data?.session && req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!data?.session && (
      req.nextUrl.pathname.startsWith('/checkout') || 
      req.nextUrl.pathname.startsWith('/profile') || 
      req.nextUrl.pathname.startsWith('/success') || 
      req.nextUrl.pathname.startsWith('/orders') || 
      req.nextUrl.pathname.startsWith('/address')
    )) {
      return NextResponse.redirect(new URL('/login', req.url))
  }

  // Return the response if no redirection is required
  return res
}
