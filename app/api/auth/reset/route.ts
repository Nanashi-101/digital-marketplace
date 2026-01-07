import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://chroma-ui-ecru.vercel.app/api/auth/kindeAuth/logout"
  );
}
