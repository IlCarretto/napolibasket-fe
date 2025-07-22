import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { email, password } = await request.json();
    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // make the request to register the user
    // const registrationResponse = await fetch(
    //   `${process.env.ODOO_BE_URL}/api/user/register`,
    //   options
    // ).then((res) => res.json());
    const registrationResponse =
    email === "test@gmail.com" && password === "password"
      ? {
          token: "mocked-token",
          user: { id: 1, email: "test@gmail.com" },
        }
      : { error: "invalid email or password" };
  
    if ("error" in registrationResponse) {
      // Bad request
      return Response.json(registrationResponse);
    }
  
    const response = NextResponse.json(registrationResponse, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  
    // Save the tokens in the cookie response if registration is successful
    if (registrationResponse.token) {
      response.cookies.set({
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        sameSite: "strict",
        name: "tokens",
        path: "/",
        value: JSON.stringify(registrationResponse),
      });
    }
  
    return response;
  }