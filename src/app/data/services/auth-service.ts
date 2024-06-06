interface RegisterUserProps {
  email: string;
  password: string;
}

export async function registerUserService(userData: RegisterUserProps) {
  const url = new URL("/api/register", process.env.NEXT_PUBLIC_API_BASE_URL);
  try {
    console.log(userData);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    });
    return response.json();
  } catch (err) {
    console.error("Registration service error", err);
  }
}

export async function loginUserService(userData: RegisterUserProps) {
  const url = new URL("/api/login", process.env.NEXT_PUBLIC_API_BASE_URL);
  try {
    console.log(userData);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    });
    return response.json();
  } catch (err) {
    console.error("Login service error", err);
  }
}
