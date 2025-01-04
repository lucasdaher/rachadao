import React from "react";

type FooterListTitleProps = {
  children: React.ReactNode;
};

export function FooterListTitle({ children }: FooterListTitleProps) {
  return (
    <h1
      className={`text-white text-xl font-bold tracking-tight leading-none pb-4`}
    >
      {children}
    </h1>
  );
}
