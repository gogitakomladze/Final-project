import { PropsWithChildren, useState } from "react";
import { AuthContext, TAuthorizationStage_Enum } from "./AuthContext";

export function AuthProvider({ children }: PropsWithChildren){
    const [authStage, setAuthStage] = useState<TAuthorizationStage_Enum>(
        TAuthorizationStage_Enum.UNAUTHORIZED
    );
    return <AuthContext.Provider 
    value={{
        authStage,
        setAuthStage,
    }}
    >
        {children}
    </AuthContext.Provider>;
}