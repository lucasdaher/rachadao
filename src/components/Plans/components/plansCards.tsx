"use client";

import React from "react";

import { plans } from "../data/plansData";
import { PaymentButton } from "@/components/Payment/components/paymentButton";
import { Check } from "lucide-react";

export function PlansCards() {
  return (
    <React.Fragment>
      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-auto lg:max-w-lg lg:grid-cols-1">
        {plans.map((plan, planIdx) => (
          <div
            key={planIdx}
            className={`flex flex-col justify-between rounded-xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 shadow-2xl shadow-black-900/60`}
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={`text-2xl font-semibold leading-8 text-green-600`}
                >
                  {plan.name}
                </h3>
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  R${plan.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-500">
                  /mês
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
              </ul>
            </div>

            <PaymentButton plan={plan}>Adquirir assinatura</PaymentButton>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
