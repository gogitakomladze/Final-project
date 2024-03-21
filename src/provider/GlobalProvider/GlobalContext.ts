import { Dispatch, SetStateAction, createContext } from "react";

import { TCategori, producttype } from "@src/@types/requestTypes"; 

interface TGlobalContext {
    categoriname: TCategori[] | undefined;
    setCategoriName: React.Dispatch<React.SetStateAction<TCategori[] | undefined>>;
    products: producttype[] | undefined;
    setProducts: React.Dispatch<React.SetStateAction<producttype[] | undefined>>;
    productId: string;
    setProductId:React.Dispatch<React.SetStateAction<string>>;
}
export const GlobalContext = createContext<TGlobalContext>({
    categoriname: [],
    setCategoriName: () => {},
    products: [],
    setProducts: () => {},
    productId: "",
    setProductId:() => {},
})