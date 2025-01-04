import React from "react";

type FooterListTitleProps = {
  children: React.ReactNode;
  pb?: number;
};

export function FooterListTitle({ pb = 4, children }: FooterListTitleProps) {
  return (
    <h1
      className={`text-white text-xl font-bold tracking-tight leading-none pb-${pb}`}
    >
      {children}
    </h1>
  );
}
