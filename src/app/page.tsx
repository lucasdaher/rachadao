"use client";

import { Header } from "@/components/Header";
import { HeaderList } from "@/components/Header/components/HeaderList/headerList";
import { HeaderListItem } from "@/components/Header/components/HeaderList/headerListItem";
import { HeaderLogo } from "@/components/Header/components/headerLogo";
import { HeaderNav } from "@/components/Header/components/headerNav";
import { Introduction } from "@/components/Introduction";
import { Plans } from "@/components/Plans/plans";
import { Button } from "@/components/ui/button";

import { tv } from "tailwind-variants";

import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Faq } from "@/components/Faq";

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
  return (
    <div>
      <Header>
        <HeaderLogo logo="white" />

        <HeaderNav>
          <HeaderList>
            <HeaderListItem>
              <Link href={`/signin`}>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-green-600 text-green-50 border-gren-500 font-semibold outline-green-500 hover:bg-green-700 tracking-tight"
                >
                  Entrar
                </Button>
              </Link>
            </HeaderListItem>
            <HeaderListItem>
              <Link href={`/signup`}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tracking-tight text-green-600 bg-white hover:bg-gray-200"
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

      <Faq />

      <Footer />
    </div>
  );
}
