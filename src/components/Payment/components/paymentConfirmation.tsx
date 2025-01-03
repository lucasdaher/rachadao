import React from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import agree from "@/assets/illustrations/agree.svg";

export function PaymentConfirmation() {
  return (
    <React.Fragment>
      <Card className="max-w-lg text-center">
        <CardContent>
          <CardHeader>
            <Image
              src={agree}
              alt="Ilustração que representa sucesso!"
              className="w-56 mx-auto mb-8"
            />
            <div>
              <CardTitle className="text-2xl">Assinatura Confirmada</CardTitle>
              <CardDescription className="text-gray-700 text-sm">
                A sua assinatura foi confirmada e você já pode utilizar a nossa
                plataforma.
              </CardDescription>
            </div>
          </CardHeader>
          <Link href={`/dashboard`} className={cn(buttonVariants(), "mt-6")}>
            Acessar o Rachadão
          </Link>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
