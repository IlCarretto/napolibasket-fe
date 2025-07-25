import { NextRequest } from "next/server";
import { getUserCredentials } from "./getUserCredentials";
import saveUserTokens from "./saveUserTokens";
import { Tokens } from "./saveUserTokens";
// import { UnauthorizedResponse } from "../types/unauthorizedResponse";

// Define the backend URL and the maximum time for token refresh
const BACKEND_URL = process.env["BACKEND_APP"];
const MAX_TIME_REFRESH = 60 * 1000; 


export default async function fetchWithCredentials(
  path: string,
  init: RequestInit | undefined,
  req: NextRequest
) {

  const userCredentials = getUserCredentials(req);


  if (!userCredentials) {
    return { message: "No credentials provided", statusCode: 401 };
  }

  // Create a function to make the fetch request with the appropriate credentials
  const requestToFetch = makeFetch(path, userCredentials.accessToken, init);

  if (userCredentials.tokenExpires - (Date.now() + MAX_TIME_REFRESH) < 0) {

    const newTokens = await refresh(userCredentials.refreshToken);

    if ("accessToken" in newTokens) {
      saveUserTokens(newTokens);
      return await requestToFetch(newTokens.accessToken);
    }

    // If token refresh fails, return the error response
    return newTokens;
  }

  // If the access token is still valid, proceed with the original request
  return requestToFetch();
}

// Function to refresh user tokens
async function refresh(rt: string) {
  return new Promise<Tokens>((resolve) => {
    // Make a POST request to the token refresh endpoint
    fetch(BACKEND_URL + "/auth/refresh", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${rt}`,
      },
    })
      .then((res) => res.json())
      .then((json) => resolve(json));
  });
}

// Function to create a fetch function with the specified credentials
function makeFetch(
  path: string,
  accessToken: string,
  init: RequestInit | undefined
): (newAccessToken?: string) => Promise<any> {
  return async function (newAccessToken?: string) {
    // Make a fetch request to the specified path with the provided or refreshed access token
    return fetch(`${BACKEND_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${newAccessToken ?? accessToken}`,
      },
      ...init,
    }).then((res) => res.json());
  };
}
