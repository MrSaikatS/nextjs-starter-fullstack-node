"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";
import { Toaster } from "../shadcnui/toast";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      {children}

      <Toaster timeout={2000} />
    </NextThemesProvider>
  );
};

export default ThemeProvider;
