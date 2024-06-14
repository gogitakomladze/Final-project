import { publicAxios } from "@src/utils/publicAxios";
import {  useEffect, useState } from "react";
import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider";

export function useGetCartProducts(){
    const{cartproducts, setCartProducts} = useGlobalProvider();
   async function getCartproduct() {
    
        const resp = await publicAxios.get("/");
        console.log(resp);
        
        setCartProducts(resp.data.products)
        
   }
   useEffect(() => {
    getCartproduct();
   },[]);

   return {cartproducts}
}