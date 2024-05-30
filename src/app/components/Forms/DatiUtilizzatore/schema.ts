import { z } from "zod";

export const schemaDatiUtilizzatore = z.object({
  nome: z
    .string({
      required_error: "Inserire un nome",
    })
    .min(3, { message: "Il nome deve contenere almeno 3 caratteri" })
    .max(30, { message: "Il nome deve contenere massimo 30 caratteri" }),
  cognome: z
    .string({
      required_error: "Inserire un cognome",
    })
    .min(3, { message: "Il cognome deve contenere almeno 3 caratteri" })
    .max(30, { message: "Il cognome deve contenere massimo 30 caratteri" }),
  mobile: z
    .number()
    .min(1, { message: "Inserire un numero di telefono valido" }),
});
