import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, organizationName } = req.body;

    const interest = await prisma.waitlistInterest.create({
      data: {
        email,
        organizationName,
      },
    });

    return res.status(200).json(interest);
  } catch (error) {
    return res.status(500).json({ error: "Error creating signup" });
  }
}
