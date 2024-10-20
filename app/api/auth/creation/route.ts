import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

// This is a GET request, so we can send user data to our Database
export async function GET() { // don't add default here it breaks the authentication
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // If the user is not authenticated, we return an error
  if(!user || user === null || !user.id){
    return {
      status: 401,
      body: {
        error: "Unauthorized"
      }
    }
  }

  // We check if the user is already in the database
  let dbUser =  await prisma.user.findUnique({
    where: {
      id: user.id
    }
  })

  // If the user is not in the database, we create a new user
  if(!dbUser){
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}.svg`,
      },
    });
  }

  // We return the user data to the db and redirect the user to the homepage
  return NextResponse.redirect(`http://localhost:3000`);
}
