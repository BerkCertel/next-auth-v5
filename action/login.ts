import * as z from "zod";
import { LoginSchema } from "@/app/schema";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateField = LoginSchema.safeParse(values);

  if (!validateField.success) {
    return { error: "Invalid field" };
  }

  return { success: "Email sent" };
};
