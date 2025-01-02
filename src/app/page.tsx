"use client";

import { Header } from "@/components/Header";
import { HeaderList } from "@/components/Header/components/HeaderList/headerList";
import { HeaderListItem } from "@/components/Header/components/HeaderList/headerListItem";
import { HeaderLogo } from "@/components/Header/components/headerLogo";
import { HeaderNav } from "@/components/Header/components/headerNav";
import { useScrollDown } from "@/components/Header/hooks/useScrollDown";
import { Introduction } from "@/components/Introduction";
import { YearlyProvider } from "@/components/Plans/contexts/yearlyContext";
import { Plans } from "@/components/Plans/plans";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { tv } from "tailwind-variants";

import rachadaoLogo from "@/assets/logos/logo-black.svg";
import Link from "next/link";

const button = tv({
  base: "rounded-xl transition-all duration-200 ease-in-out",
  variants: {
    scroll: {
      true: "bg-white text-black hover:bg-black-900 hover:text-white",
      false: "bg-white text-green-950 hover:bg-green-100",
    },
  },
  defaultVariants: {
    scroll: false,
  },
});

export default function Home() {
  const { scrolledDown } = useScrollDown();

  return (
    <YearlyProvider>
      <div>
        <Header>
          {scrolledDown && <HeaderLogo logo="black" />}
          {!scrolledDown && <HeaderLogo logo="white" />}

          <HeaderNav>
            <HeaderList>
              <HeaderListItem>
                <Button
                  className={button({ scroll: scrolledDown })}
                  onClick={() => {
                    window.alert(
                      "Funcionalidade em desenvolvimento. / Levar para área de login e registro."
                    );
                  }}
                >
                  Acesse sua conta
                </Button>
              </HeaderListItem>
            </HeaderList>
          </HeaderNav>
        </Header>

        <Introduction />

        <Plans />

        <section className="w-full p-24">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-center text-4xl font-bold max-w-3xl text-black-900 text-opacity-80 leading-10 tracking-tighter">
                Estamos em beta e por isso estamos oferecendo a todos 1 dia
                gratuito temporariamente
              </h1>
              <p className="text-center text-lg font-medium max-w-4xl text-black-900 text-opacity-60 leading-8 tracking-tight">
                Para resgatar seu período de testes gratuito clique no botão
                abaixo
              </p>
            </div>

            <Button className="" variant="default" size="lg">
              Resgatar período de teste
            </Button>
          </div>
        </section>

        <footer className="w-full bg-transparent backdrop-blur-xl p-14">
          <div className="flex flex-row justify-between items-center">
            <section>
              <div className="flex flex-col justify-center items-start gap-2">
                <button className="hover:scale-105 transition-all duration-200 ease-in-out">
                  <Image
                    src={rachadaoLogo}
                    alt="Logo do Rachadão versão branca"
                    className="w-40"
                  />
                </button>
                <p className="text-left text-sm font-medium tracking-tight max-w-64">
                  Rua 20 norte, 6, Águas Claras (Norte), Edifício Vivaldi
                  Moreira, Brasília, Distrito Federal.
                </p>

                <p className="text-black-900 text-opacity-50 text-left text-sm font-medium tracking-tight max-w-64">
                  CNPJ: 57.428.661/0001-30
                </p>
              </div>
            </section>

            <div className="flex flex-row items-start gap-12">
              <section>
                <nav>
                  <h1 className="text-xl font-bold pb-1 mb-4 border-b-2 border-black-900 border-opacity-20">
                    Navegação
                  </h1>
                  <ul>
                    <Link
                      className="group transition-all duration-200 ease-in-out"
                      href={`#`}
                    >
                      <li className="text-black-900 text-opacity-70 hover:text-black-900 transition-all duration-200 ease-in-out hover:bg-green-500 hover:bg-opacity-50 hover:backdrop-blur-xl p-2 rounded-xl">
                        Início
                      </li>
                    </Link>

                    <Link
                      className="group transition-all duration-200 ease-in-out"
                      href={`#plans`}
                    >
                      <li className="text-black-900 text-opacity-70 hover:text-black-900 transition-all duration-200 ease-in-out hover:bg-green-500 hover:bg-opacity-50 hover:backdrop-blur-xl p-2 rounded-xl">
                        Preços
                      </li>
                    </Link>

                    <Link
                      className="group transition-all duration-200 ease-in-out"
                      href={`/central-de-ajuda`}
                    >
                      <li className="text-black-900 text-opacity-70 hover:text-black-900 transition-all duration-200 ease-in-out hover:bg-green-500 hover:bg-opacity-50 hover:backdrop-blur-xl p-2 rounded-xl">
                        Central de Ajuda
                      </li>
                    </Link>
                  </ul>
                </nav>
              </section>

              <section>
                <nav>
                  <h1 className="text-xl font-bold pb-1 mb-4 border-b-2 border-black-900 border-opacity-20">
                    Mídias sociais
                  </h1>
                  <ul>
                    <Link
                      href="https://instagram.com/rachadao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all duration-200 ease-in-out"
                    >
                      <li className="text-black-900 text-opacity-70 hover:text-black-900 transition-all duration-200 ease-in-out hover:bg-green-500 hover:bg-opacity-50 hover:backdrop-blur-xl p-2 rounded-xl">
                        Instagram
                      </li>
                    </Link>

                    <Link
                      className="group transition-all duration-200 ease-in-out"
                      href={`/comunidade`}
                    >
                      <li className="text-black-900 text-opacity-70 hover:text-black-900 transition-all duration-200 ease-in-out hover:bg-green-500 hover:bg-opacity-50 hover:backdrop-blur-xl p-2 rounded-xl">
                        Comunidade
                      </li>
                    </Link>
                  </ul>
                </nav>
              </section>
            </div>
          </div>
        </footer>
      </div>
    </YearlyProvider>
  );
}
