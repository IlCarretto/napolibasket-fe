import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request, response: Response) {
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
  const { recaptchaToken } = await request.json();
  let res;
  const data = `secret=${secretKey}&response=${recaptchaToken}`;
  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (err) {
    console.error("Error during reCAPTCHA verification", err);
    return NextResponse.json({ success: false });
  }
  if (res && res.data?.success) {
    return NextResponse.json({
      success: true,
    });
  } else {
    return NextResponse.json({ success: false });
  }
}
