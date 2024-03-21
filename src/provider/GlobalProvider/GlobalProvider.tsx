import { TCategori, producttype } from "@src/@types/requestTypes";
import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
    const [ categoriname, setCategoriName] = useState<TCategori[]>();
    const [products, setProducts] = useState<producttype[]>()
    const [productId, setProductId] = useState<string>("");
    return (
        <GlobalContext.Provider
        value={{
            categoriname,
            setCategoriName,
            products,
            setProducts,
            productId,
            setProductId,

        }}
        >
           {children}
        </GlobalContext.Provider>
    )
}