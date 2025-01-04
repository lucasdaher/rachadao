import { ComponentProps } from "react";

export type IntroductionTitleProps = ComponentProps<"div">;

export function IntroductionTitle({ ...props }: IntroductionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6" {...props}>
      <h1 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center max-w-3xl">
        A melhor forma de dividir <br />
        despesas com os amigos
      </h1>
      <p className="text-lg text-white text-opacity-80 mb-8 animate-fade-up animate-delay-150 max-w-3xl text-center">
        Descubra a solução perfeita para dividir contas no rolê ou organizar as
        despesas de viagens com amigos de forma simples, prática e sem
        complicações!
      </p>
    </div>
  );
}
