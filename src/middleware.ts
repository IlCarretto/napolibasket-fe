import { NextResponse, type NextRequest } from "next/server";
import { getUserCredentials } from "@/utils/auth/getUserCredentials";

// Define the routes that require authentication
const protectedRoutes = ["/ticket-selection", "/cart", "/payment"];

// Middleware function to handle authentication and redirection
export async function middleware(request: NextRequest) {
  // Extract the pathname from the request URL
  const pathname = request.nextUrl.pathname;

  // Get user credentials from the request
  const credentials = getUserCredentials(request);

  // Check if the current route is protected and user credentials are missing
  // or the refresh token is not valid
  if (protectedRoutes.includes(pathname) && !credentials) {

    // Delete the "user" cookie from the request to log the user out
    request.cookies.delete("tokens");

    // Create a redirection response to the specified endpoint
    const response = NextResponse.redirect(new URL("/", request.url));

    // Delete the "user" cookie from the response as well
    response.cookies.delete("tokens");

    // Return the redirection response
    return response;
  }

  // If the route is not protected or the user has valid credentials, continue to the next middleware
  return NextResponse.next();
}
