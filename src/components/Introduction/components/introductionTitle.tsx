import { ComponentProps } from "react";

export type IntroductionTitleProps = ComponentProps<"div">;

export function IntroductionTitle({ ...props }: IntroductionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6" {...props}>
      <h1 className="hidden md:inline-block text-white scroll-m-20 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center max-w-3xl">
        A melhor forma de dividir <br />
        despesas com os amigos
      </h1>
      <h1 className="inline-block md:hidden text-white scroll-m-20 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center max-w-3xl">
        O melhor divisor de <br />
        despesas pros rolês
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-white text-opacity-80 mb-8 animate-fade-up animate-delay-150 max-w-xl md:max-w-2xl lg:max-w-3xl text-center">
        Descubra a solução perfeita para dividir contas no rolê ou organizar as
        despesas de viagens com amigos de forma simples, prática e sem
        complicações!
      </p>
    </div>
  );
}
