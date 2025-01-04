"use client";

import React, { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import registerAction from "@/app/(auth)/signup/registerAction";
import Form from "next/form";

export function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <React.Fragment>
      {state?.success === false && (
        <div
          className="flex justify-center items-start flex-col text-xs mb-6 bg-red-100 border border-red-400 text-red-700 md:px-4 md:py-3 px-2 py-1 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline">{state?.message}</span>
        </div>
      )}
      <Form
        action={formAction}
        className="mx-auto md:mx-0 lg:mx-0 space-y-4 w-full max-w-md"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-left">
            Nome completo:
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o seu nome completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-left">
            E-mail:
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu melhor e-mail"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-left">
            Senha:
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite uma senha"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Criando sua conta..." : "Criar conta"}
        </Button>
      </Form>
    </React.Fragment>
  );
}
