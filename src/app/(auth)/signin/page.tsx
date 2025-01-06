import { SignInForm } from "@/components/Autentication";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { auth } from "@/../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import logoBlack from "@/assets/logos/logo-black.svg";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex justify-center items-center overflow-y-auto bg-black-900/70 backdrop-blur-xl w-full fixed top-0 left-0 z-0">
      <div className="fixed top-0 left-0 flex md:hidden justify-center items-center w-auto mt-10 mx-4 md:mx-6 lg:mx-0">
        <Link href={`/`}>
          <Image
            src={logoBlack}
            alt="Logo versão preta do Rachadão"
            className="w-28"
          />
        </Link>
      </div>
      <div className="lg:fixed lg:top-0 lg:left-0 hidden md:inline-block">
        <Header onlyLogo={true} />
      </div>

      <div className="flex items-center justify-center my-44">
        <Card className="text-center w-full mx-auto max-w-full md:max-w-md border-none md:border shadow-none md:shadow-sm py-0 px-0 p-0 space-y-0 space-x-0">
          <CardHeader className="text-left">
            <CardTitle className="text-2xl text-black-900">
              Acesse sua conta
            </CardTitle>
            <CardDescription className="text-base text-black-900/50">
              Preencha seu e-mail e senha para acessar
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center mx-auto md:text-left md:mx-0">
            <SignInForm />
            <div className="mt-4 text-center">
              <div className="flex justify-center items-center gap-1">
                <span className="text-sm font-medium text-black-900">
                  Não tem uma conta?
                </span>
                <Link href={`/signup`}>
                  <Button
                    variant="link"
                    className="text-sm font-semibold text-green-600 p-0"
                  >
                    Crie agora
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
