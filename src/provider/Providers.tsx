import { PropsWithChildren } from "react"; 
import { AuthProvider } from "./AuthProvider";
import { GlobalProvider } from "./GlobalProvider";
import { LocaleProvider } from "./LocaleProvider/LocaleProvider";

export function Providers({ children }: PropsWithChildren) {
    return (
        
        <AuthProvider>
            <GlobalProvider>
                <LocaleProvider>
                  {children}
                  </LocaleProvider>
            </GlobalProvider>
        </AuthProvider>
        
    )
}