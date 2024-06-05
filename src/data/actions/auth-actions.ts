"use client";

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

  const { email, password } = validatedLoginFields.data;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    if (response.ok) {
      return {
        ...prevState,
        data: result,
        login: true,
      };
    } else {
      return {
        ...prevState,
        message: result.message || "Failed to login",
      };
    }
  } catch (error) {
    return {
      ...prevState,
      message: "An error occurred. Please try again later.",
    };
  }
}
