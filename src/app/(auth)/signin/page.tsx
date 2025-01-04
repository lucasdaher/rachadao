import { SignInForm } from "@/components/Autentication";
import { Header } from "@/components/Header";
import { HeaderList } from "@/components/Header/components/HeaderList/headerList";
import { HeaderListItem } from "@/components/Header/components/HeaderList/headerListItem";
import { HeaderLogo } from "@/components/Header/components/headerLogo";
import { HeaderNav } from "@/components/Header/components/headerNav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import React from "react";
import { auth } from "@/../auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="min-h-screen h-full overflow-y-auto bg-black-900/70 backdrop-blur-xl w-full fixed top-0 left-0 z-0">
      <Header>
        <HeaderLogo logo="white" />
      </Header>

      <div className="flex items-center justify-center my-44">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl text-green-500">
              Entrar na conta
            </CardTitle>
            <CardDescription>
              Digite as suas credenciais para acessar a sua conta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm />
            <div className="mt-4 text-center">
              <Link href={`/signup`}>
                <Button variant="link">Não possui uma conta? Crie agora</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
