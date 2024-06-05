"use server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: any) {
  const { email, password } = await request.json();
  // const options: RequestInit = {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // make the request to authenticate the user
  // const tokensResponse = await fetch(
  //   "http://localhost:3000/actual-be-endpoint",
  //   options
  // ).then((res) => res.json());
  const tokensResponse =
    email === "test@gmail.com" && password === "password"
      ? {
          token: "mocked-token",
          user: { id: 1, email: "test@gmail.com" },
        }
      : { error: "invalid email or password" };

  if ("error" in tokensResponse) {
    // Bad request
    return Response.json(tokensResponse);
  }

  const response = NextResponse.json(tokensResponse, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

  // Save the tokens in the cookie response
  response.cookies.set({
    httpOnly: true,
    maxAge: 24 * 60 * 60,
    sameSite: "strict",
    name: "tokens",
    path: "/",
    value: JSON.stringify(tokensResponse),
  });

  return response;
}

export async function DELETE(req: Request, res: Response) {
  cookies().delete("tokens");
  return NextResponse.json(
    { status: true, message: "Logged out" },
    { status: 200, headers: {} }
  );
}
