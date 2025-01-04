import React from "react";

export function IntroductionCta({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center md:justify-center space-y-6 md:space-x-3 lg:space-x-4 md:space-y-0 animate-fade-up animate-delay-300">
      {children}
    </section>
  );
}
