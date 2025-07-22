import { NextRequest } from "next/server";

// export type UserCredentials = {
//   accessToken: string;
//   refreshToken: string;
//   expiresIn: number;
// };

export type UserCredentials = {
  id: number;
  email: string;
};

export function getUserCredentials(req: NextRequest): UserCredentials | null {
  // getting the tookes from the cookie
  let tokens = req.cookies.get("tokens")?.value;
  if (!tokens) return null;
  try {
    // Parse the token
    const parsedTokens = JSON.parse(tokens);

    // Extract user credentials
    const user = parsedTokens.user;
    if (!user) return null;

    const userCredentials: UserCredentials = {
      id: user.id,
      email: user.email,
    };

    return userCredentials;
  } catch (error) {
    console.error("Failed to parse tokens", error);
    return null;
  }
}
