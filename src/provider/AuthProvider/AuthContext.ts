import { TAuthRequest } from "@src/@types/requestTypes";
import { createContext } from "react";

export enum TAuthorizationStage_Enum {
    UNAUTHORIZED = "unatorized",
    AUTHORIZED = "authorized",
};

type AuthContextValue = {
    authStage: TAuthorizationStage_Enum;
    setAuthData: (e: TAuthRequest) => void;
    setAuthStage: React.Dispatch<React.SetStateAction<TAuthorizationStage_Enum>>;
};

export const AuthContext = createContext<AuthContextValue>({
    authStage: TAuthorizationStage_Enum.UNAUTHORIZED,
    setAuthData: () => {},
    setAuthStage: () => {},
});