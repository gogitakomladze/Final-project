import { TCategori, producttype } from "@src/@types/requestTypes";
import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
    const [ categoriname, setCategoriName] = useState<TCategori[]>();
    const [products, setProducts] = useState<producttype[]>();
    const [productCategori, setProductCategori] = useState<producttype[]>();
    const [productId, setProductId] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [countProducts, setCountProducts] = useState<number>(0);
    const [countCartProducts, setCountCartProducts] = useState<number>(() => {
        const countCartItems = localStorage.getItem("header cart count");
        return countCartItems ? JSON.parse(countCartItems) : 0;
      });
    const [purchasedItem, setPurchasedItem] = useState<{ id: string }[]>(() => {
        const storedPurchasedItem = localStorage.getItem("purchased item");
        return storedPurchasedItem ? JSON.parse(storedPurchasedItem) : [];
      });  
     const [subtotal, setSubtotal] = useState<number>(0);
   
    return (
        <GlobalContext.Provider
        value={{
            categoriname,
            setCategoriName,
            products,
            setProducts,
            productCategori,
            setProductCategori,
            productId,
            setProductId,
            loading,
            setLoading,
            countCartProducts,
            setCountCartProducts,
            countProducts,
            setCountProducts,
            purchasedItem,
            setPurchasedItem,
            subtotal,
            setSubtotal,
        }}
        >
           {children}
        </GlobalContext.Provider>
    )
}