import { NextResponse } from "next/server";
import { sendSubscribeEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email } = body ?? {};

  if (typeof firstName !== "string" || !firstName.trim()) {
    return NextResponse.json(
      { ok: false, error: "First name is required." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email is required." },
      { status: 400 },
    );
  }

  try {
    await sendSubscribeEmail({
      firstName: firstName.trim(),
      lastName: typeof lastName === "string" ? lastName.trim() : undefined,
      email: email.trim(),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send subscribe email", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
