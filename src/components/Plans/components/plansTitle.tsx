import React from "react";

export function PlansTitle() {
  return (
    <React.Fragment>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-green-500">
          Planos de assinatura
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-black-900 sm:text-5xl">
          Escolha o plano ideal para você
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-black-900 text-opacity-80">
        Escolha o plano perfeito para você: uma opção acessível para uso
        individual ou um plano conjunto que é fácil de dividir entre amigos,
        garantindo praticidade e economia para todos.
      </p>
    </React.Fragment>
  );
}
