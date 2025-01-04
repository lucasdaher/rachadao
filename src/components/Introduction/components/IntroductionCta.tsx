import React from "react";

export function IntroductionCta({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center space-x-4 animate-fade-up animate-delay-300">
      {children}
    </section>
  );
}
