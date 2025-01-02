import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/logos/logo-white.svg";
import CheckoutReturnPage from "./payment-confirmation/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-6">
      {/* <Link href={`/`}>
        <Image
          src={logo}
          alt="Logo Rachadão"
          className="w-48 hover:scale-105 transition-all duration-200 ease-in-out"
        />
      </Link> */}

      <CheckoutReturnPage />
    </section>
  );
}
