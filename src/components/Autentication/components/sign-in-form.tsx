"use client";

import React, { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Form from "next/form";
import loginAction from "@/app/(auth)/signin/loginAction";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <React.Fragment>
      {state?.success === false && (
        <div
          className="flex justify-center items-start flex-col text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Erro encontrado!</strong>
          <span className="block sm:inline">{state?.message}</span>
        </div>
      )}
      <Form action={formAction} className="space-y-4 w-full max-w-md">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail:</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu e-mail"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha:</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a sua senha"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Logando..." : "Entrar"}
        </Button>
      </Form>
    </React.Fragment>
  );
}
