"use server";

import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  // In a real application, you would validate the credentials and create a session
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Sign in attempt:", { email, password });

  // Simulate a successful sign-in
  redirect("/dashboard");
}

export async function signUp(formData: FormData) {
  // In a real application, you would create a new user account
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Sign up attempt:", { name, email, password });

  // Simulate a successful sign-up
  redirect("/dashboard");
}
