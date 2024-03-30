import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Smartphon() {

  const [smartphon, setSmartphon] = useState([]);

  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

   async function getSmartphon() {
    const resp = await publicAxios.get("/product?categoryName=სმარტფონები&page=1&pageSize=30");
    setSmartphon(resp.data.products);
   }
   useEffect(() => {
    getSmartphon();
   }, [])


   return (
    <>
         <h1 id="categoriTitle">სმარტფონები</h1>

    <TCategoristyled >
        {smartphon.map((Smartphons: producttype) => {
            return (

                <div 
                key={Smartphons.id}
                onClick={() => {
                    setProductId(Smartphons.id);
                    navigate(`/products/${Smartphons.id}`);
                    
                }}
                >

                    <img src={Smartphons.image} /> 
                    <p>{Smartphons.price} ₾</p>
                    <h1>{Smartphons.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>
   );
}