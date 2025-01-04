import React from "react";

export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-xl p-14">
      {children}
    </footer>
  );
}
