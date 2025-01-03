"use server";

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function registerAction(
  _prevState: any,
  formData: FormData
) {
  const entries = Array.from(formData.entries());

  // Inicializa um objeto com os dados de entrada do formData.
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  // Verifica se todos os dados foram passados corretamente.
  if (!data.email || !data.name || !data.password) {
    return {
      message: "Preencha todos os campos!",
      success: false,
    };
  }

  // Inicializa uma instancia do Prisma e faz uma verificação
  // utilizando o e-mail para ver se o usuário já existe.
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  // Verificação para caso o usuário já exista.
  if (user)
    return {
      message: "Este usuário já existe!",
      success: false,
    };

  // Realiza a criação do usuário no banco de dados.
  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      // Faz a criptografia da senha utilizando o bcrypt.
      password: hashSync(data.password),
    },
  });

  // Envia uma mensagem de sucesso caso o usuário seja criado!
  return redirect("/signin");
}
