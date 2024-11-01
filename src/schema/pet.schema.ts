import * as z from "zod";

import { CommonSchema } from "@/schema/common.schema";

export const PetSchema = z.object({
  id: z.string().min(1, "Name is required") , 
  petName: z.string().min(1, "Name is required"),
  age: z.string().min(1, "Age is required"),
  breed: z.string().min(1, "Breed is required"),
  gender: z.string().min(1, "Gender is required"),
  description: z.string().min(5, "Description is required"),
  rescueDate: z.string(),
  shelterName: z.string().min(1, "Shelter Name is required").nullable(),
  petImages: z.array(z.object({
    image: z.string().url(),
  })),
  imageSrc: z.string().url(),
});

export type PetType = z.infer<typeof PetSchema>;

export const PetResponseSchema = CommonSchema.extend({
  data: z.array(PetSchema),
  success: z.boolean(),
  message: z.string()
});
export type PetResponseType = z.infer<typeof PetResponseSchema>;

export type PetDetailType = z.infer<typeof PetSchema>

export type PetDetailResponseType = {
  message: string;
  success: boolean;
  data: PetDetailType; 
};

