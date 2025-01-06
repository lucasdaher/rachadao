"use client";

import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import registerAction from "@/app/(auth)/signup/registerAction";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert } from "lucide-react";

import { hashSync } from "bcrypt-ts";

import db from "@/lib/db";

export function SignUpForm() {
  const signUpSchema = z.object({
    name: z.string().nonempty("Você precisa digitar o seu nome completo"),
    email: z
      .string()
      .nonempty("Você precisa digitar o seu e-mail")
      .email("O e-mail informado é inválido."),
    password: z
      .string()
      .nonempty("Você precisa digitar uma senha")
      .min(8, "A senha deve ter pelo menos 8 caracteres."),
  });

  type signUpFormData = z.infer<typeof signUpSchema>;

  const [state, formAction, isPending] = useActionState(registerAction, null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto md:mx-0 lg:mx-0 space-y-4 w-full max-w-md"
      >
        <div className="mx-auto md:mx-0 lg:mx-0 space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-left">
              Nome completo:
            </Label>
            <Input
              {...register("name")}
              type="text"
              placeholder="Digite o seu nome completo"
            />
            {errors?.name && (
              <>
                <div className="flex flex-row justify-start items-center gap-1 pt-1">
                  <TriangleAlert className="w-3 h-3 text-red-500" />
                  <p className="text-red-500 text-xs font-medium leading-none">
                    {errors?.name?.message}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-left">
              E-mail:
            </Label>
            <Input
              {...register("email")}
              placeholder="Digite o seu melhor e-mail"
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
              placeholder="Digite uma senha"
            />
            {errors?.password && (
              <div className="flex flex-row justify-start items-center gap-1 pt-1">
                <TriangleAlert className="w-3 h-3 text-red-500" />
                <p className="text-red-500 text-xs font-medium leading-none">
                  {errors?.password?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="pt-8">
          <Button
            size="lg"
            type="submit"
            className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold"
            disabled={isPending}
          >
            {isPending ? "Criando sua conta..." : "Criar conta"}
          </Button>
        </div>
      </form>
    </>
  );
}
