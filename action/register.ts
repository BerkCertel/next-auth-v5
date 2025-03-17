"use server";

import * as z from "zod";
import { registerSchema } from "@/app/schema";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validateField = registerSchema.safeParse(values);

  if (!validateField.success) {
    return { error: "Invalid field" };
  }

  const { email, password, name } = validateField.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email is already in use." };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Email sent" };
};
