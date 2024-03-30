import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Laptop() {

  const [leptop, setLeptop] = useState([]);

  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

   async function getSmartphon() {
    const resp = await publicAxios.get("/product?categoryName=ლეპტოპები&page=1&pageSize=30");
    setLeptop(resp.data.products);
   }
   useEffect(() => {
    getSmartphon();
   }, [])


   return (
    <>
         <h1 id="categoriTitle">ლეპტოპები</h1>

    <TCategoristyled >
        {leptop.map((lept: producttype) => {
            return (

                <div 
                key={lept.id}
                onClick={() => {
                    setProductId(lept.id);
                    navigate(`/products/${lept.id}`);
                    
                }}>

                    <img src={lept.image} /> 
                    <p>{lept.price} ₾</p>
                    <h1>{lept.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>
   );
}