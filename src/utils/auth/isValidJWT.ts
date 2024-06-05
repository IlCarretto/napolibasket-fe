import * as jwt from "jsonwebtoken";

export default async function isValidJWT(token: string) {
    
  const JWT_SECRET = process.env["JWT_SECRET"] ?? "";
  // Transform the callback into a promise
  return new Promise((resolve) => {
    // you can return the payload instead of true if you want.
    jwt.verify(token, JWT_SECRET, function (err, payload) {
      if (err) resolve(false);
      return resolve(true);
    });
  });
}
