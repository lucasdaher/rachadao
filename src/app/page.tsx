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

import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded-xl transition-all duration-200 ease-in-out",
  variants: {
    scroll: {
      true: "bg-white text-black hover:bg-black-900 hover:text-white",
      false: "bg-green-500 text-white hover:bg-green-600",
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
                <Button className={button({ scroll: scrolledDown })}>
                  Acessar
                </Button>
              </HeaderListItem>
            </HeaderList>
          </HeaderNav>
        </Header>

        <Introduction />

        <Plans />
      </div>
    </YearlyProvider>
  );
}
