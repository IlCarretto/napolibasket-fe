import { z } from "zod";

export const schemaRegister = z
  .object({
    email: z.string().email({
      message: "Inserisci un email valida",
    }),
    password: z
      .string()
      .min(8, { message: "La password deve contenere almeno 8 caratteri" })
      .max(20, { message: "La password deve contenere massimo 20 caratteri" }),
    confirmPassword: z.string(),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Le password non coincidono",
    path: ["confirmPassword"],
  });
