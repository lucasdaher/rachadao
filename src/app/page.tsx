"use client";

import { Header } from "@/components/Header";
import { HeaderList } from "@/components/Header/components/HeaderList/headerList";
import { HeaderListItem } from "@/components/Header/components/HeaderList/headerListItem";
import { HeaderLogo } from "@/components/Header/components/headerLogo";
import { HeaderNav } from "@/components/Header/components/headerNav";
import { useScrollDown } from "@/components/Header/hooks/useScrollDown";
import { Introduction } from "@/components/Introduction";
import { Plans } from "@/components/Plans/plans";
import { Button } from "@/components/ui/button";

import { tv } from "tailwind-variants";

import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { FooterInfo } from "@/components/Footer/components/footerInfo";
import { FooterListTitle } from "@/components/Footer/components/footerListTitle";
import { FooterList } from "@/components/Footer/components/footerList";
import { FooterListItem } from "@/components/Footer/components/footerListItem";
import { FooterNav } from "@/components/Footer/components/footerNav";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const button = tv({
  base: "transition-all duration-200 ease-in-out tracking-tight leading-none",
  variants: {
    scroll: {
      true: "bg-white text-black-900 hover:bg-black-900 hover:text-white",
      false: "bg-white text-black-900 hover:bg-green-100",
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
        {scrolledDown && <HeaderLogo logo="white" />}
        {!scrolledDown && <HeaderLogo logo="white" />}

        <HeaderNav>
          <HeaderList>
            <HeaderListItem>
              <Link href={`/signin`}>
                <Button
                  variant="default"
                  className="bg-green-600 text-green-50 border-gren-500 font-semibold outline-green-500 hover:bg-green-700 tracking-tight"
                >
                  Entrar
                </Button>
              </Link>
            </HeaderListItem>
            <HeaderListItem>
              <Link href={`/signin`}>
                <Button
                  variant="secondary"
                  className="tracking-tight text-black-900 bg-white hover:bg-gray-200"
                >
                  Criar conta
                </Button>
              </Link>
            </HeaderListItem>
          </HeaderList>
        </HeaderNav>
      </Header>

      <Introduction />

      <Features />
      <Plans />

      <Footer>
        <div className="flex flex-row justify-between items-center">
          <FooterInfo />

          <div className="flex flex-row items-start gap-12">
            <section>
              <FooterListTitle>Navegação</FooterListTitle>
              <FooterNav>
                <FooterList>
                  <FooterListItem hasLink={true} href={`#`}>
                    Início
                  </FooterListItem>

                  <FooterListItem hasLink={true} href={`#plans`}>
                    Planos
                  </FooterListItem>

                  <FooterListItem hasLink={true} href={`/help-center`}>
                    Central de Ajuda
                  </FooterListItem>
                </FooterList>
              </FooterNav>
            </section>

            <section>
              <FooterListTitle>Central de Ajuda</FooterListTitle>
              <FooterNav>
                <FooterList>
                  <FooterListItem hasLink={true} href={`#`}>
                    Suporte
                  </FooterListItem>

                  <FooterListItem hasLink={true} href={`#plans`}>
                    E-mail
                  </FooterListItem>

                  <FooterListItem hasLink={true} href={`/help-center`}>
                    FAQ
                  </FooterListItem>
                </FooterList>
              </FooterNav>
            </section>

            <section>
              <FooterListTitle>Redes Sociais</FooterListTitle>
              <FooterNav>
                <FooterList>
                  <FooterListItem
                    hasLink={true}
                    href={`https://instagram.com/daher.code`}
                    flex="flex justify-center items-center gap-2"
                  >
                    <InstagramIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-all duration-200 ease-in-out" />
                    Instagram
                  </FooterListItem>

                  <FooterListItem
                    hasLink={true}
                    href={`https://linkedin.com/in/lucasdaherdev`}
                    flex="flex justify-center items-center gap-2"
                  >
                    <LinkedinIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-all duration-200 ease-in-out" />
                    Linkedin
                  </FooterListItem>

                  <FooterListItem
                    hasLink={true}
                    href={`https://github.com/lucasdaher/rachadao`}
                    flex="flex justify-center items-center gap-2"
                  >
                    <GithubIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-all duration-200 ease-in-out" />
                    GitHub
                  </FooterListItem>
                </FooterList>
              </FooterNav>
            </section>
          </div>
        </div>
      </Footer>
    </div>
  );
}
