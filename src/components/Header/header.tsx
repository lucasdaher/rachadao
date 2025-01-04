"use client";

import { ComponentProps, useEffect } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useScrollDown } from "./hooks/useScrollDown";
import { HeaderLogo } from "./components/headerLogo";
import { HeaderNav } from "./components/headerNav";
import { HeaderList } from "./components/HeaderList/headerList";
import { HeaderListItem } from "./components/HeaderList/headerListItem";
import Link from "next/link";
import { Button } from "../ui/button";

const header = tv({
  base: "fixed h-14 flex flex-row justify-between items-center px-4 py-1 lg:px-8 lg:py-2 z-50",
  variants: {
    scrollDown: {
      true: "w-full md:w-[98%] lg:w-[98%] md:top-3 md:left-1/2 md:-translate-x-1/2 bg-green-900 bg-opacity-50 backdrop-blur-2xl rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-black-900/20",
      false:
        "w-screen md:w-full lg:w-full md:top-0 md:left-0 bg-transparent transition-all duration-300 ease-in-out",
    },
  },
  defaultVariants: {
    scrollDown: false,
  },
});

export type HeaderProps = ComponentProps<"header"> &
  VariantProps<typeof header> & {
    onlyLogo?: boolean;
  };

export function Header({
  onlyLogo = false,
  scrollDown,
  ...props
}: HeaderProps) {
  const { scrolledDown } = useScrollDown();

  return (
    <header className={header({ scrollDown: scrolledDown })} {...props}>
      <HeaderLogo logo="white" />

      {!onlyLogo && (
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
      )}
    </header>
  );
}
