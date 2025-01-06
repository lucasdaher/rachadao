"use client";

import React, { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Form from "next/form";
import loginAction from "@/app/(auth)/signin/loginAction";

import { z } from "zod";
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert } from "lucide-react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, formAction, isPending] = useActionState(loginAction, null);

  const signInSchema = z.object({
    email: z
      .string()
      .nonempty("Você precisa digitar um e-mail válido.")
      .email("O e-mail informado é inválido."),
    password: z.string().nonempty("Você precisa digitar a sua senha."),
  });

  type signInFormData = z.infer<typeof signInSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await db.user.create({
        data: {
          name: data.name,
          email: data.email,
          // Faz a criptografia da senha utilizando o bcrypt.
          password: hashSync(data.password),
        },
      });
      console.log("Usuário criado com sucesso.");
    } catch (error) {
      console.log("O usuário não foi criado no banco de dados.");
    }
  };

  return (
    <React.Fragment>
      <form
        action={formAction}
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto md:mx-0 lg:mx-0 space-y-4 w-full max-w-md"
      >
        <div className="mx-auto md:mx-0 lg:mx-0 space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-left">
              E-mail:
            </Label>
            <Input
              {...register("email")}
              type="text"
              placeholder="Digite o seu e-mail"
            />
            {errors?.email && (
              <>
                <div className="flex flex-row justify-start items-center gap-1 pt-1">
                  <TriangleAlert className="w-3 h-3 text-red-500" />
                  <p className="text-red-500 text-xs font-medium leading-none">
                    {errors?.email?.message}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-left">
              Senha:
            </Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Digite a sua senha"
            />
            {errors?.password && (
              <>
                <div className="flex flex-row justify-start items-center gap-1 pt-1">
                  <TriangleAlert className="w-3 h-3 text-red-500" />
                  <p className="text-red-500 text-xs font-medium leading-none">
                    {errors?.password?.message}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="pt-8">
            <Button
              size="lg"
              type="submit"
              className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold"
              disabled={isPending}
            >
              {isPending ? "Acessando sua conta..." : "Entrar"}
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
