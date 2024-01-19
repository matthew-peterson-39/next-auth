"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const vlaidatedFields = RegisterSchema.safeParse(values);
    if (!vlaidatedFields.success) { 
        return {error: "Invalid field(s)!"};
    }
    return {success: "Email sent!"};
}