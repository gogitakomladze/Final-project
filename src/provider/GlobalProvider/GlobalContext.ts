import { Dispatch, SetStateAction, createContext } from "react";

import { TCategori } from "@src/@types/requestTypes"; 

interface TGlobalContext {
    categoriname: TCategori[] | undefined;
    setCategoriName: React.Dispatch<React.SetStateAction<TCategori[] | undefined>>;
}
export const GlobalContext = createContext<TGlobalContext>({
    categoriname: [],
    setCategoriName: () => {},
})