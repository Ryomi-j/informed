"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { State } from "../types/form";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ROUTES } from "../constants/routes";
import bcrypt from "bcryptjs";

// sign in
export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    const result = await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    if (!result?.error) {
      redirect(ROUTES.HOME);
    }

    return "Please check your email and password.";
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Please check your email and password.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};

const FormSchema = z.object({
  email: z
    .string({ required_error: "Please enter a valid email address." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string({ required_error: "Please enter a valid password." })
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z
    .string({ required_error: "Please confirm your password." })
    .min(8, { message: "Please confirm your password." }),
});

const SignUpSchema = FormSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Please check your password.",
    path: ["confirmPassword"],
  }
);

// sign up
export const signUp = async (prevState: State, formData: FormData) => {
  const validatedFields = SignUpSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please check your email and password.",
    };
  }

  const { email, password } = validatedFields.data;
  const created_at = new Date().toISOString();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users (
        email, 
        password, 
        created_at, 
        auth_provider
      ) 
      VALUES (
        ${email}, 
        ${hashedPassword}, 
        ${created_at}, 
        'email'
      )
      RETURNING *
    `;

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
  } catch (error) {
    console.error(error);
    return { message: "Database Error: Failed to create user." };
  }

  revalidatePath(ROUTES.HOME);
  redirect(ROUTES.HOME);
};
