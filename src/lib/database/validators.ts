import { z } from "zod";

export const reachOutFormSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description:z.string().min(3, "Description must be at least 3 chaaracters").max(400,"Description must be less than 400 characters"),
    location:z.string().min(3, "Location must be at least 3 characters").max(400, "location must be at less than 400 characters "),
    imageUrl:z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

  })
  