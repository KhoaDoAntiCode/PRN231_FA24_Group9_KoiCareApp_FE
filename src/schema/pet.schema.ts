import * as z from "zod";

import { CommonSchema } from "@/schema/common.schema";

export const PetSchema = z.object({
  id: z.string().min(1, "Name is required") , 
  petName: z.string().min(1, "Name is required"),
  age: z.string().min(1, "Age is required"),
  breed: z.string().min(1, "Breed is required"),
  gender: z.string().min(1, "Gender is required"),
  description: z.string().min(5, "Description is required"),
  rescueDate: z.date(),
  imageSrc: z.string().min(1, "Image is required"),
  shelterName: z.string().min(1, "Shelter Name is required"),
});

export type PetType = z.infer<typeof PetSchema>;

export const PetResponseSchema = CommonSchema.extend({
  response: z.array(PetSchema),
  success: z.boolean(),
  message: z.string()
});

export const PetDetailResponseSchema = z.object({
  response: z.array(PetSchema),
  success: z.boolean(),
  message: z.string(),
})

export type PetDetailResponseType = z.infer<typeof PetDetailResponseSchema>;

export type PetResponseType = z.infer<typeof PetResponseSchema>;

export const PetList = z.object({
  id: z.string().min(1, "Name is required") , 
  petName: z.string().min(1, "Name is required"),
  age: z.string().min(1, "Age is required"),
  breed: z.string().min(1, "Breed is required"),
})

export type PetListType = z.infer<typeof PetList>;
// export const CreatePetSchema = PetSchema.omit({
//   _id : true,
  
// })

// export type CreatePetType = z.infer<typeof CreatePetSchema>;

