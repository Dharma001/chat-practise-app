import { z } from "zod";

export const messagevalidator =z.object({
  id: z.string(),
  senderId: z.string(),
  text: z.string(),
  timestamp: z.number()
})


export const messageArrayValidator = z.array(messagevalidator)

export type Message = z.infer<typeof messagevalidator>