"use client";

import { Header } from "@/components/Header";
import { HeaderLogo } from "@/components/Header/components/headerLogo";
import { useScrollDown } from "@/components/Header/hooks/useScrollDown";
import { Button } from "@/components/ui/button";

import { ArrowDown } from "lucide-react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-white hover:bg-green-600 rounded-xl",
  variants: {
    scroll: {
      true: "bg-black-900",
      false: "bg-green-500",
    },
  },
  defaultVariants: {
    scroll: false,
  },
});

export default function Home() {
  const { scrolledDown } = useScrollDown();
  return (
    <div>
      <Header>
        {scrolledDown && <HeaderLogo logo="black" />}
        {!scrolledDown && <HeaderLogo logo="white" />}

        <nav>
          <ul className="flex justify-center items-center gap-2">
            <li>
              <Button className={button({ scroll: scrolledDown })}>
                Acessar
              </Button>
            </li>
          </ul>
        </nav>
      </Header>

      <main className="backdrop-blur-xl bg-black-900 w-full flex flex-col justify-center items-center gap-10 px-36 pt-40 pb-36">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-artschool text-white font-normal text-6xl tracking-tight max-w-[700px] text-center">
            A melhor forma de{" "}
            <span className="bg-green-500 px-2 py-1 text-white hover:bg-green-500 hover:text-green-950 transition-all duration-300 ease-in-out hover:cursor-pointer">
              rachar as contas
            </span>
          </h1>
          <p className="text-white text-opacity-80 font-medium text-xl max-w-[700px] text-center tracking-tight">
            Conheça agora mesmo a solução para os seus problemas na hora de
            pagar a conta no rolê ou na hora de se organizar pra uma viagem com
            amigos!
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            className="flex justify-center items-center gap-2 bg-white text-black-900 hover:bg-zinc-300 rounded-xl px-4 py-2 text-base transition-all duration-200"
            title="Veja nossos planos de assinatura."
          >
            Ver planos de assinatura
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </main>

      <footer className="mt-[1500px]">
        <h1 className="text-red-500">testando</h1>
      </footer>
    </div>
  );
}
