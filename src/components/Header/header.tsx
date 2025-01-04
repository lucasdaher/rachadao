"use client";

import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useScrollDown } from "./hooks/useScrollDown";

const header = tv({
  base: "fixed h-14 flex justify-between items-center px-8 py-2 z-50",
  variants: {
    scrollDown: {
      true: "w-[98%] top-3 left-1/2 -translate-x-1/2 bg-green-900 bg-opacity-50 backdrop-blur-2xl rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-black-900/20",
      false:
        "w-full top-0 left-0 bg-transparent transition-all duration-300 ease-in-out",
    },
  },
  defaultVariants: {
    scrollDown: false,
  },
});

export type HeaderProps = ComponentProps<"header"> &
  VariantProps<typeof header>;

export function Header({ scrollDown, ...props }: HeaderProps) {
  const { scrolledDown } = useScrollDown();

  return (
    <header className={header({ scrollDown: scrolledDown })} {...props}>
      {props.children}
    </header>
  );
}
