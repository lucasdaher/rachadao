"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CollapsibleContextProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const CollapsibleContext = createContext<CollapsibleContextProps | undefined>(
  undefined
);

export const CollapsibleProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <CollapsibleContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </CollapsibleContext.Provider>
  );
};

export const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (context === undefined) {
    throw new Error("useCollapsible must be used within a CollapsibleProvider");
  }
  return context;
};
