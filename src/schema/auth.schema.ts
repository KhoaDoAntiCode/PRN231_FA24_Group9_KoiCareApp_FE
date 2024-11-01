import * as z from "zod"

import { Role } from "@/enum"

export const LoginSchema = z.object({
  emailAddress: z.string().min(1, "Username is required").trim(),
  passwordHash: z.string().min(1, "Password is required").trim(),
})

export type LoginType = z.infer<typeof LoginSchema>
export const LoginResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    token: z.string(),
});

export type LoginResponseType = z.infer<typeof LoginResponseSchema>;

export const RegisterSchema = z.object({
    emailAddress: z.string().email("Invalid email address"),
    passwordHash: z.string(),
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().min(10, "Phone number is required"),
  });
  

export type RegisterType = z.infer<typeof RegisterSchema>

export type RegisterResponseType = {
  data: RegisterType[]
  success: boolean
  message: string
  error: string
  errorMessages:string
}

export const UserDTOSchema = z.object({
  id: z.string(),
  emailAddress: z.string(),
  fullName: z.string().min(1, "Fullname is required"),
  phoneNumber :  z.string().min(10, "Phone number is required"),
  role: z.nativeEnum(Role), // Use the enum for validation
})

export type UserDTOType = z.infer<typeof UserDTOSchema>

export type UserDTOResponseType = {
  success: boolean
  message: string
  response: UserDTOType[]
}
