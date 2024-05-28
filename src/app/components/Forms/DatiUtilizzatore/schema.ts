import { z } from "zod";

export const schemaDatiUtilizzatore = z.object({
  nome: z
    .string()
    .min(3, { message: "Il nome deve contenere almeno 3 caratteri" })
    .max(30, { message: "Il nome deve contenere massimo 30 caratteri" }),
  cognome: z
    .string()
    .min(3, { message: "Il cognome deve contenere almeno 3 caratteri" })
    .max(30, { message: "Il cognome deve contenere massimo 30 caratteri" }),
    phone: 
    z.string()
    .
});
