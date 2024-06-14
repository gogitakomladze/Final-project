import { publicAxios } from "@src/utils/publicAxios";
import { useContext, useEffect } from "react";
import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider";
import { GlobalContext } from "@src/provider/GlobalProvider";

export function useGetProducts() {
    const { products, setProducts } = useGlobalProvider();
    const {
        setProductId,
        loading,
        setLoading,
    } = useContext(GlobalContext);
    async function getProduct() {
        try {
            const resp = await publicAxios.get("/product?page=1&pageSize=50");
            setProducts(resp.data.products);
            
        } catch (error) {
            console.error("Product fetch error", error);
        } finally {
            setLoading(false);
        }
    } 

    useEffect(() => {
        getProduct();
    }, []);
    return {products}
}