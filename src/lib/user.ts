import db from "./db";
import { compareSync } from "bcrypt-ts";

type User = {
  email: string;
  password?: string;
  name: string;
};

export async function findUserByCredentials(
  email: string,
  password: string
): Promise<User | null> {
  // Inicializa o prisma e procura o primeiro usuário com o e-mail informado.
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  // Se o usuário não existe, retorna nulo.
  if (!user) {
    return null;
  }

  // Verifica se a senha criptografada é igual a digitada pelo usuário
  const passwordAccepted = compareSync(password, user.password);

  // Caso a senha seja aceita, retorna o e-mail e o nome.
  if (passwordAccepted) {
    return { email: user.email, name: user.name };
  }

  return null;
}
