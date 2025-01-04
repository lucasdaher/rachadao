"use client";

import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { Plans } from "@/components/Plans/plans";

import { tv } from "tailwind-variants";

import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
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
      <Header />
      <Introduction />
      <Features />
      <Plans />
      <Faq />
      <Footer />
    </div>
  );
}
