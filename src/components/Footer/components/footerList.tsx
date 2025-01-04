import React from "react";

type FooterListProps = {
  children: React.ReactNode;
  gap?: number;
};

export function FooterList({ gap = 2, children }: FooterListProps) {
  return (
    <ul className={`flex flex-col justify-center items-start gap-${gap}`}>
      {children}
    </ul>
  );
}
