import logoRachadaoIcon from "@/assets/logos/logo-icon.png";
import logoRachadaoWhite from "@/assets/logos/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type HeaderLogoProps = {
  logo: "white" | "icon";
};

export function HeaderLogo({ logo }: HeaderLogoProps) {
  return (
    <React.Fragment>
      <Link
        href={`/`}
        className="hover:scale-105 transition-all duration-200 ease-in-out"
      >
        {logo === "white" && (
          <>
            <Image
              src={logoRachadaoWhite}
              alt="Logo Rachadão"
              className="hidden md:inline-block w-32 lg:w-36 h-auto"
              loading="lazy"
            />
            <Image
              src={logoRachadaoIcon}
              alt="Logo Rachadão Ícone"
              className="inline-block md:hidden w-8 lg:w-36 h-auto"
              loading="lazy"
            />
          </>
        )}

        {logo === "icon" && (
          <>
            <Image
              src={logoRachadaoIcon}
              alt="Logo Rachadão Ícone"
              className="inline-block md:hidden w-8 lg:w-36 h-auto"
              loading="lazy"
            />
            <Image
              src={logoRachadaoWhite}
              alt="Logo Rachadão"
              className="hidden md:inline-block w-32 lg:w-36 h-auto"
              loading="lazy"
            />
          </>
        )}
      </Link>
    </React.Fragment>
  );
}
