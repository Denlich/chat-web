import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2).max(20),
  surname: z.string().min(4).max(30),
  username: z.string().min(3).max(30),
  email: z.string().email().min(3).max(30),
  password: z.string().min(6).max(30),
});

export type RegisterFormValues = z.infer<typeof schema>;
