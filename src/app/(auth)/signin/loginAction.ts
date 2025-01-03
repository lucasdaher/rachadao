"use server";

import { signIn } from "@/../auth";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard",
    });
    return { success: true };
  } catch (e: any) {
    if (e.type === "CredentialsSignin") {
      return {
        success: false,
        message: "Usuário ou senha estão incorretos!",
      };
    }
    return {
      success: false,
      message: "A conta especificada não existe.",
    };
  }
}
