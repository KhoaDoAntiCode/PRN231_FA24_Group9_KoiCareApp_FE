import * as z from "zod"

import { CommonSchema } from "@/schema/common.schema"

export const LoginSchema = z.object({
  emailAddress: z.string().min(1, "Username is required"),
  passwordHash: z.string().min(1, "Password is required"),
})

export type LoginType = z.infer<typeof LoginSchema>

export const RegisterSchema = z
  .object({
    emailAddress: z.string().email("Invalid email address"),
    passwordHash: z.string(),
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().min(10, "Phone number is required"),
  });
  // .refine((schema) => schema.passwordHash === schema.confirmedPassword, {
  //   message: "Passwords do not match",
  //   path: ["confirmedPassword"],
  // })

export type RegisterType = z.infer<typeof RegisterSchema>

export const MemberSchema = z
.object({
  memberName: z.string().min(1, "Username is required"),
  _id: z.string(),
  isAdmin: z.boolean(),
  name: z.string().min(1, "Name is required"),
  YOB: z.coerce
    .number()
    .min(1990, "Year of birth must be between 1990 and 2024")
    .max(2024, "Year of birth must be between 1990 and 2024"),
    
})

export type MemberType = z.infer<typeof MemberSchema>

export const ProfileSchema = MemberSchema.omit({
  _id: true,
  isAdmin: true,
})

export type ProfileType = z.infer<typeof ProfileSchema>

export const PasswordSettingSchema = z
  .object({
    passwordHash: z.string().min(1, "Password is required"),
    newPasswordHash: z.string().min(1, "Password is required"),
    confirmedPassword: z.string(),
  })
  .refine((schema) => schema.newPasswordHash === schema.confirmedPassword, {
    message: "Passwords do not match",
    path: ["confirmedPassword"],
  })
  .refine((schema) => schema.passwordHash !== schema.newPasswordHash, {
    message: "New password must be different from the current password",
    path: ["newPassword"],
  })

export type PasswordSettingType = z.infer<typeof PasswordSettingSchema>

export type ProfileSettingResponseType = {
  success: boolean
  message: string
  response: MemberType
}

export const MemberResponseSchema = CommonSchema.extend({
  response: z.array(MemberSchema),
})

export type MemberResponseType = z.infer<typeof MemberResponseSchema>

export type LoginResponseType = {
  success: boolean
  message: string
  response: MemberType
}
export type RegisterResponseType = {
  success: boolean
  message: string
}

export type WhoAmIResponseType = {
  success: boolean
  message: string
  response: MemberType
}