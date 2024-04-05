import { TAuthRequest, TUserRequest } from "@src/@types/requestTypes";
import { createContext } from "react";

export enum TAuthorizationStage_Enum {
    UNAUTHORIZED = "unatorized",
    AUTHORIZED = "authorized",
};

type AuthContextValue = {
    userData?: TUserRequest | undefined;
    authStage: TAuthorizationStage_Enum;
    logaut: () => void;
    setAuthData: (e: TAuthRequest) => void;
    setAuthStage: React.Dispatch<React.SetStateAction<TAuthorizationStage_Enum>>;
};

export const AuthContext = createContext<AuthContextValue>({
    authStage: TAuthorizationStage_Enum.UNAUTHORIZED,
    setAuthData: () => {},
    userData: undefined,
    setAuthStage: () => {},
    logaut: () => {},
});