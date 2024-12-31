"use client";

import { useEffect, useState } from "react";

export function useScrollDown() {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 550;

      if (isScrolled !== scrolledDown) {
        setScrolledDown(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolledDown]);
  return { scrolledDown, setScrolledDown };
}
