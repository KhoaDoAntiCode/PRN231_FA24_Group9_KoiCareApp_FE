import * as z from 'zod';


export const RegisterSchema = z.object({
    emailAddress: z.string().email({
        message: "Please enter a valid email address"
    }),
    passwordHash: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    fullname: z.string().min(1, {
        message: "Please enter your name"
    }),
    phoneNumber: z.string().min(10, {
        message: "Password must be at least 10 characters long"
    })
})