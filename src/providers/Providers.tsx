import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalProvider } from "./GlobalProvider";
import { ThemeProvider } from "./ThemeProvider";

type ProvidersProps = {};

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
