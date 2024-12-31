import logoRachadaoBlack from "@/assets/logos/logo-black.svg";
import logoRachadaoWhite from "@/assets/logos/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type HeaderLogoProps = {
  logo: "white" | "black";
};

export function HeaderLogo({ logo }: HeaderLogoProps) {
  return (
    <React.Fragment>
      <Link
        href={`/`}
        className="hover:scale-105 transition-all duration-200 ease-in-out"
      >
        {logo === "white" && (
          <Image
            src={logoRachadaoWhite}
            alt="Logo Rachadão"
            className="w-36 h-auto"
          />
        )}

        {logo === "black" && (
          <Image
            src={logoRachadaoBlack}
            alt="Logo Rachadão"
            className="w-36 h-auto"
            loading="lazy"
          />
        )}
      </Link>
    </React.Fragment>
  );
}
