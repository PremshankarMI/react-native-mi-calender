import React, { createContext, useContext, useMemo } from 'react';

import { miColor, miUiStyle } from '../themes';

export interface MiUiContextType {
  colors: typeof miColor;
  styles: ReturnType<typeof miUiStyle>;
}

export const MiUiContext = createContext<MiUiContextType | undefined>(
  undefined
);

export interface MiUiProviderPropsType {
  children: JSX.Element;
}

export const MiUiProvider = ({ children }: MiUiProviderPropsType) => {
  const miUiContext = useMemo(() => {
    return {
      colors: miColor,
      styles: miUiStyle(),
    };
  }, []);

  return (
    <MiUiContext.Provider value={miUiContext}>{children}</MiUiContext.Provider>
  );
};

export const useMiUiContext = () => {
  const context = useContext(MiUiContext);
  if (!context) throw Error('useMiUiContext must be used inside MiUiContext');
  return context;
};
