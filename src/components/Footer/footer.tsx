import React from "react";

import { FooterInfo } from "@/components/Footer/components/footerInfo";
import { FooterListTitle } from "@/components/Footer/components/footerListTitle";
import { FooterList } from "@/components/Footer/components/footerList";
import { FooterListItem } from "@/components/Footer/components/footerListItem";
import { FooterNav } from "@/components/Footer/components/footerNav";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-xl px-4 py-10 md:px-6 md:py-10 lg:p-14">
      <div className="flex flex-col gap-12 md:gap-2 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
        <FooterInfo />

        <div className="flex flex-col text-center gap-6 md:text-left md:flex-row justify-between items-start lg:justify-center lg:gap-12 w-full lg:w-auto">
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
            <FooterListTitle>Ajuda</FooterListTitle>
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
    </footer>
  );
}
