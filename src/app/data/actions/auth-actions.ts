"use server";

import { schemaLogin } from "@/app/components/Forms/Login/schema";
import { schemaRegister } from "@/app/components/Forms/Register/schema";
import { loginUserService, registerUserService } from "../services/auth-service";

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

  const responseData = await registerUserService(validatedRegisterFields.data);

  if (!responseData) {
    return {
      ...prevState,
      zodErrors: null,
      message: "Something went wrong",
    };
  }

  return {
    ...prevState,
    data: responseData,
    login: true,
  };
}

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedLoginFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedLoginFields.success) {
    console.log("Failed");

    return {
      ...prevState,
      zodErrors: validatedLoginFields.error.flatten().fieldErrors,
      message: "Failed to login",
    };
  }

  const responseData = await loginUserService(validatedLoginFields.data);

  if (!responseData) {
    return {
      ...prevState,
      zodErrors: null,
      message: "Something went wrong",
    };
  }

  return {
    ...prevState,
    data: responseData,
    login: true,
  };
}
