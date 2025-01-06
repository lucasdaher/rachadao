"use server";

import { signIn } from "@/../auth";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    const result = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });

    return {
      success: true,
      redirectTo: "/dashboard",
    };
  } catch (e: any) {
    if (e.type === "CredentialsSignin") {
      return {
        success: false,
        message: "O e-mail ou senha estão incorretos.",
      };
    }
    if (e.type === "UserNotFound") {
      return {
        success: false,
        message: "O e-mail especificado não existe.",
      };
    }

    return {
      success: false,
      message: "A conta especificada não existe.",
    };
  }
}
