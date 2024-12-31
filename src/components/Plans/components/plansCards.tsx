"use client";

import { Button } from "@/components/ui/button";

import { plans } from "../data/plansData";
import { useYearly } from "../contexts/yearlyContext";
import { Check, X } from "lucide-react";

export function PlansCards() {
  const { isYearly } = useYearly();
  return (
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {plans.map((plan, planIdx) => (
        <div
          key={planIdx}
          className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10`}
        >
          <div>
            <div className="flex items-center justify-between gap-x-4">
              <h3
                className={`text-lg font-semibold leading-8 ${
                  plan.name === "Plano Rachadão"
                    ? "text-green-600"
                    : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              {plan.name === "Plano Rachadão" && (
                <p className="rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-600">
                  Mais popular
                </p>
              )}
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                R${isYearly ? plan.price.yearly : plan.price.monthly}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-600">
                /{isYearly ? "ano" : "mês"}
              </span>
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
            >
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check
                    className="h-6 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
              {plan.notIncluded.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-x-3 line-through decoration-gray-400"
                >
                  <X
                    className="h-6 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Button
            variant={plan.name === "Plano Rachadão" ? "default" : "outline"}
            className={`mt-8 block w-full ${
              plan.name === "Plano Rachadão"
                ? "bg-green-600 text-white hover:bg-green-500"
                : ""
            }`}
          >
            Começar agora
          </Button>
        </div>
      ))}
    </div>
  );
}
