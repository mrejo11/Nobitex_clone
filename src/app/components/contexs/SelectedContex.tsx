'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type SelectedType = "toman" | "tether";

interface SelectedContextProps {
  selected: SelectedType;
  setSelected: (value: SelectedType) => void;
}

const SelectedContext = createContext<SelectedContextProps | undefined>(undefined);

export const SelectedProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<SelectedType>("toman");

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelected = () => {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error('useSelected must be used within a SelectedProvider');
  }
  return context;
};
