"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

type PaymentButtonProps = {
  children: React.ReactNode;
  plan: any | undefined | null;
};

export function PaymentButton({ children, plan }: PaymentButtonProps) {
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const loadStripeAsync = async () => {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
      );
      setStripePromise(stripe);
    };

    loadStripeAsync();
  }, []);

  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Não foi possível recuperar o client_secret.");
      }

      const data = await response.json();
      setClientSecret(data.client_secret);
    } catch (error) {
      console.error(
        "Ocorreu um erro ao tentar recuperar o client_secret:",
        error
      );
    }
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <React.Fragment>
      <Dialog modal onOpenChange={fetchClientSecret}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className={`mt-8 block w-full bg-green-600 text-white font-semibold hover:bg-green-500`}
          >
            {children}
          </Button>
        </DialogTrigger>
        <DialogContent className="my-8 lg:my-12 py-14">
          <>
            <VisuallyHidden.Root>
              <DialogTitle>Plano de Assinatura</DialogTitle>
            </VisuallyHidden.Root>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
