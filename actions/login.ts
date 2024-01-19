"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const vlaidatedFields = LoginSchema.safeParse(values);
    
    if (!vlaidatedFields.success) { 
        return {error: "Login failed."};
    }

    const { email, password } = vlaidatedFields.data;
    try {
        await signIn("credentials", {
            email, 
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials."}
                default:
                    return {error: "Something went wrong."}
            }
        }
        throw error;
    }
};