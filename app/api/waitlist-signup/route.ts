import { NextResponse } from "next/server";
import prisma from "../../../prisma/prismaClient";

export async function POST(request: Request) {
  try {
    const { email, organizationName } = await request.json();

    const interest = await prisma.waitlistInterest.create({
      data: {
        email,
        organizationName,
      },
    });

    return NextResponse.json(interest);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating signup" },
      { status: 500 }
    );
  }
}
