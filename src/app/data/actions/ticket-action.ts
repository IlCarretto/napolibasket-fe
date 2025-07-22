"use server";

import { schemaDatiUtilizzatore } from "@/app/components/Forms/DatiUtilizzatore/schema";

export async function addNominativoTicketAction(
  prevState: any,
  formData: FormData
) {
  const validatedTicketFields = schemaDatiUtilizzatore.safeParse({
    nome: formData.get("nome"),
    cognome: formData.get("cognome"),
    mobile: Number(formData.get("mobile")),
  });

  if (!validatedTicketFields.success) {
    return {
      ...prevState,
      zodErrors: validatedTicketFields.error.flatten().fieldErrors,
      message: "Failed to add data",
    };
  }

  return {
    data: validatedTicketFields,
  };
}
