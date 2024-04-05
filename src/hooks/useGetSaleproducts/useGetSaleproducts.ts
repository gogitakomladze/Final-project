import { publicAxios } from "@src/utils/publicAxios";
import { useContext, useEffect } from "react";
import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider";
import { GlobalContext } from "@src/provider/GlobalProvider";

export function useGetProductsSale() {
    const { productsSale, setProductsSale } = useGlobalProvider();
    const {
        setProductId,
        loading,
        setLoading,
    } = useContext(GlobalContext);
    async function getProductsale() {
        try {
            const resp = await publicAxios.get("/product?onlySales=true");
            setProductsSale(resp.data.products);
        } catch (error) {
            console.error("Product fetch error", error);
        } finally {
            setLoading(false);
        }
    } 

    useEffect(() => {
        getProductsale();
    }, []);
    return {productsSale}
}