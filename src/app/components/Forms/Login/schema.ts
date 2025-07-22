import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email({
    message: "Inserisci un email valida",
  }),
  password: z
    .string()
    .min(8, { message: "La password deve contenere almeno 8 caratteri" })
    .max(20, { message: "La password deve contenere massimo 20 caratteri" }),
});
