"use client";

import { createContext, useContext, useState } from "react";

interface YearlyContextProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

const YearlyContext = createContext<YearlyContextProps | undefined>(undefined);

export const YearlyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <YearlyContext.Provider value={{ isYearly, setIsYearly }}>
      {children}
    </YearlyContext.Provider>
  );
};

export const useYearly = () => {
  const context = useContext(YearlyContext);
  if (!context) {
    throw new Error(
      "useYearly precisa ser utilizado juntamente com YearlyProvider"
    );
  }
  return context;
};
