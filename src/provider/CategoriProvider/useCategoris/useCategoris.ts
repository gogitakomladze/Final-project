import axios from "axios"
import { useEffect, useState } from "react"
import { TCategori } from "@src/@types/requestTypes"

export function useCategori() {
    const [categori, setCategori] = useState<TCategori>();

    async function fatchCategori() {
        try{
            const response  = await axios.get("http://localhost:3000/product-category");
            setCategori(response.data?.categori)
        } catch (error) {}
    }

    useEffect(() => {
        fatchCategori();
    }, []);

    return {categori}
}