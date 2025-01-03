import { SignUpForm } from "@/components/Autentication";
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

export default async function SignUpPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <React.Fragment>
      <Header>
        <HeaderLogo logo="black" />

        <HeaderNav>
          <HeaderList>
            <HeaderListItem>
              <Link href={`/`}>
                <Button className="rounded-xl transition-all duration-200 ease-in-out bg-white text-black hover:bg-black-900 hover:text-white">
                  <ArrowLeft />
                  Voltar ao menu inicial
                </Button>
              </Link>
            </HeaderListItem>
          </HeaderList>
        </HeaderNav>
      </Header>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-400">
              Criar a sua conta
            </CardTitle>
            <CardDescription>
              Informe os dados abaixo para criar a sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm />
            <div className="mt-4 text-center">
              <Link href={`/signin`}>
                <Button variant="link">Já possui uma conta? Entre agora</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}
