import { Dispatch, SetStateAction, createContext } from "react";

import { TCategori, producttype } from "@src/@types/requestTypes"; 

interface TGlobalContext {
    categoriname: TCategori[] | undefined;
    setCategoriName: React.Dispatch<React.SetStateAction<TCategori[] | undefined>>;
    products: producttype[] | undefined;
    setProducts: React.Dispatch<React.SetStateAction<producttype[] | undefined>>;
    productCategori: producttype[] | undefined;
    setProductCategori: React.Dispatch<React.SetStateAction<producttype[] | undefined>>;
    productId: string;
    setProductId:React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    countLikeProducts:number;
    setCountLikeProducts: React.Dispatch<React.SetStateAction<number>>;
    countCartProducts: number;
    setCountCartProducts: React.Dispatch<React.SetStateAction<number>>;
    countProducts: number;
    setCountProducts: React.Dispatch<React.SetStateAction<number>>;
    purchasedItem: {
       id: string;
       }[];
       subtotal: number;
       setSubtotal: React.Dispatch<React.SetStateAction<number>>;
  setPurchasedItem: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
      }[]
    >
  >;
}
export const GlobalContext = createContext<TGlobalContext>({
    categoriname: [],
    setCategoriName: () => {},
    products: [],
    setProducts: () => {},
    productCategori: [],
    setProductCategori: () => {},
    productId: "",
    setProductId:() => {},
    loading: false,
    setLoading: () => {},
    countLikeProducts: 0,
    setCountLikeProducts: () => {},
    countCartProducts: 0,
     setCountCartProducts: () => {},
    countProducts: 0,
    setCountProducts: () => {},
    purchasedItem: [],
    setPurchasedItem: () => {},
      subtotal: 0,
  setSubtotal: () => {},
})