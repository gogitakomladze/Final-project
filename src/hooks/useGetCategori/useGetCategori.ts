import { publicAxios } from "@src/utils/publicAxios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider";

export function useGetCategoris() {
    const { categoriname, setCategoriName } = useGlobalProvider();

    async function getCategori() {
        try {
            const resp = await publicAxios.get("/product-category");
            setCategoriName(resp.data);
        } catch (error) {
            console.error("Categori fetch error", error);
        }
    } 
    useEffect(() => {
        getCategori();
    }, []);
    return {categoriname}
}