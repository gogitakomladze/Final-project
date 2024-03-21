import { publicAxios } from "@src/utils/publicAxios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider";

export function useGetProducts() {
    const { products, setProducts } = useGlobalProvider();

    async function getProduct() {
        try {
            const resp = await publicAxios.get("/product?page=1&pageSize=20");
            setProducts(resp.data.products);
        } catch (error) {
            console.error("Product fetch error", error);
        }
    } 

    useEffect(() => {
        getProduct();
    }, []);
    return {products}
}