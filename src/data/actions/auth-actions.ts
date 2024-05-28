"use server";

import { schemaLogin } from "@/app/components/Forms/Login/schema";
import { schemaRegister } from "@/app/components/Forms/Register/schema";

export async function registerUserAction(prevState: any, formData: FormData) {
  const validatedRegisterFields = schemaRegister.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedRegisterFields.success) {
    return {
      ...prevState,
      zodErrors: validatedRegisterFields.error.flatten().fieldErrors,
      message: "Failed to register",
    };
  }

  return {
    data: validatedRegisterFields,
    login: true
  };
}

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedLoginFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedLoginFields.success) {
    return {
      ...prevState,
      zodErrors: validatedLoginFields.error.flatten().fieldErrors,
      message: "Failed to login",
    };
  }

  return {
    data: validatedLoginFields,
    login: true,
  };
}
