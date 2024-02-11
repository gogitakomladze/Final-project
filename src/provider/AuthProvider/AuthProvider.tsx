import { jwtDecode } from "jwt-decode";
import { PropsWithChildren, useState } from "react";
import { AuthContext, TAuthorizationStage_Enum } from "./AuthContext";
import { TAuthRequest, TUserRequest } from "../../@types/requestTypes";
import { setPrivateAccessToken } from "../../utils/privateAxios"; 
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../config/localStorageKeys";

export function AuthProvider({ children }: PropsWithChildren){
    const [userData, setUserData] = useState<TUserRequest>();
    const [authStage, setAuthStage] = useState<TAuthorizationStage_Enum>(
        TAuthorizationStage_Enum.UNAUTHORIZED
    );

 console.log(userData)
 function setAuthData(tokens:  TAuthRequest ) {
    const useData: TUserRequest = jwtDecode(tokens.access_token);
    setUserData(useData);
    localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
    setPrivateAccessToken(tokens.access_token);
    setAuthStage(TAuthorizationStage_Enum.AUTHORIZED);

}

    return (
    <AuthContext.Provider 
    value={{
        authStage,
        setAuthStage,
        setAuthData,
    }}
    >
        {children}
    </AuthContext.Provider>
    );
}