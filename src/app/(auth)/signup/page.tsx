import { SignUpForm } from "@/components/Autentication";
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
import React from "react";
import { auth } from "@/../auth";
import { redirect } from "next/navigation";

import Image from "next/image";

import logoBlack from "@/assets/logos/logo-black.svg";

export default async function SignUpPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center overflow-y-auto bg-white md:bg-black-900/70 backdrop-blur-xl w-full fixed top-0 left-0 z-0">
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

        <div className="flex items-center justify-center my-2 md:my-36 lg:my-44 mx-4 md:mx-6 lg:mx-0 p-0">
          <Card className="text-center w-full mx-auto max-w-full md:max-w-md border-none md:border shadow-none md:shadow-sm py-0 px-0 p-0 space-y-0 space-x-0">
            <CardHeader className="text-left">
              <CardTitle className="text-2xl text-white">
                Criar a sua conta
              </CardTitle>
              <CardDescription className="text-base text-white/50">
                Informe os dados abaixo para criar a sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center mx-auto md:text-left md:mx-0">
              <SignUpForm />
              <div className="mt-4 text-center">
                <div className="flex justify-center items-center gap-1">
                  <span className="text-sm font-medium text-white">
                    Já tem uma conta?
                  </span>
                  <Link href={`/signin`}>
                    <Button
                      variant="link"
                      className="text-sm font-semibold text-green-600 p-0"
                    >
                      Entre agora
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
