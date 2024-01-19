"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const vlaidatedFields = LoginSchema.safeParse(values);
    if (!vlaidatedFields.success) { 
        return {error: "Invalid field(s)!"};
    }
    return {success: "Email sent!"};
}