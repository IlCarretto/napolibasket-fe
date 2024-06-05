import Cookie from "js-cookie";

export type Tokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export default function saveUserTokens(credentials: Tokens) {
  const data = JSON.stringify(credentials);

  // Set a cookie named 'user' with the JSON stringified 'credentials' data
  Cookie.set("user", data);
}
