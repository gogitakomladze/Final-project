import { TCategori } from "@src/@types/requestTypes";
import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
    const [ categoriname, setCategoriName] = useState<TCategori[]>();


    return (
        <GlobalContext.Provider
        value={{
            categoriname,
            setCategoriName,

        }}
        >
           {children}
        </GlobalContext.Provider>
    )
}