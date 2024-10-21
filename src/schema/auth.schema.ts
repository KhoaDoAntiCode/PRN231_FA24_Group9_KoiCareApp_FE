import * as z from "zod"

import { CommonSchema } from "@/schema/common.schema"

import { Role } from "@/enum"

export const LoginSchema = z.object({
  emailAddress: z.string().min(1, "Username is required"),
  passwordHash: z.string().min(1, "Password is required"),
})

export type LoginType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
    emailAddress: z.string().email("Invalid email address"),
    passwordHash: z.string(),
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().min(10, "Phone number is required"),
  });
  

export type RegisterType = z.infer<typeof RegisterSchema>

// export interface UserDTO {
//   id: string;
//   emailAddress: string;
//   fullName: string;
//   phoneNumber: string;
//   role: Role;
// }

export const UserDTOSchema = z.object({
  id: z.string(),
  emailAddress: z.string(),
  fullName: z.string().min(1, "Fullname is required"),
  phoneNumber :  z.string().min(10, "Phone number is required"),
  role: z.nativeEnum(Role), // Use the enum for validation
})

export type UserDTOType = z.infer<typeof UserDTOSchema>

// export const ProfileSchema = MemberSchema.omit({
//   _id: true,
//   isAdmin: true,
// })

// export type ProfileType = z.infer<typeof ProfileSchema>

// export const PasswordSettingSchema = z
//   .object({
//     passwordHash: z.string().min(1, "Password is required"),
//     newPasswordHash: z.string().min(1, "Password is required"),
//     confirmedPassword: z.string(),
//   })
//   .refine((schema) => schema.newPasswordHash === schema.confirmedPassword, {
//     message: "Passwords do not match",
//     path: ["confirmedPassword"],
//   })
//   .refine((schema) => schema.passwordHash !== schema.newPasswordHash, {
//     message: "New password must be different from the current password",
//     path: ["newPassword"],
//   })



// export const MemberResponseSchema = CommonSchema.extend({
//   response: z.array(MemberSchema),
// })

// export type MemberResponseType = z.infer<typeof MemberResponseSchema> 

// export type LoginResponseType = {
//   success: boolean
//   message: string
//   response: MemberType
// }

export const LoginResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    token: z.string(),
});

export type LoginResponseType = z.infer<typeof LoginResponseSchema>;
export type RegisterResponseType = {
  success: boolean
  message: string
}

// export type WhoAmIResponseType = {
//   success: boolean
//   message: string
//   response: MemberType
// }