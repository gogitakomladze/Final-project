import { PropsWithChildren } from "react"; 
import { AuthProvider } from "./AuthProvider";
import { GlobalProvider } from "./GlobalProvider";
import { LocaleProvider } from "./LocaleProvider/LocaleProvider";
import { BrowserRouter } from "react-router-dom"; 

export function Providers({ children }: PropsWithChildren) {
    return (
        <BrowserRouter>
        <AuthProvider>
            <GlobalProvider>
                <LocaleProvider>
                  {children}
                  </LocaleProvider>
            </GlobalProvider>
        </AuthProvider>
        </BrowserRouter>
    )
}