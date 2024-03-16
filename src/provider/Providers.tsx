import { PropsWithChildren } from "react"; 
import { AuthProvider } from "./AuthProvider";
import { GlobalProvider } from "./GlobalProvider";

export function Providers({ children }: PropsWithChildren) {
    return (
        
        <AuthProvider>
            <GlobalProvider>
                {children}
            </GlobalProvider>
        </AuthProvider>
    )
}