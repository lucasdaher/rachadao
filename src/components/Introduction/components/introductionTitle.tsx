import { ComponentProps } from "react";

export type IntroductionTitleProps = ComponentProps<"div">;

export function IntroductionTitle({ ...props }: IntroductionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6" {...props}>
      <h1 className="font-bold text-white text-7xl tracking-tight leading-none max-w-[700px] text-center">
        A melhor forma de{" "}
        <span className="bg-black-900 px-2 text-white hover:bg-green-500 transition-all duration-300 ease-in-out hover:cursor-pointer">
          rachar as contas
        </span>
      </h1>
      <p className="text-white font-medium text-xl max-w-[700px] text-center tracking-tight">
        Descubra a solução perfeita para dividir contas no rolê ou organizar as
        despesas de viagens com amigos de forma simples, prática e sem
        complicações!
      </p>
    </div>
  );
}
