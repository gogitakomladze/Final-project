import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Photovideo() {

  const [potovideo, setpotovideo] = useState([]);

  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

   async function getSmartphon() {
    const resp = await publicAxios.get("/product?categoryName=ფოტო | ვიდეო&page=1&pageSize=30");
    setpotovideo(resp.data.products);
   }
   useEffect(() => {
    getSmartphon();
   }, [])


   return (
    <>
         <h1 id="categoriTitle">ფოტო | ვიდეო</h1>

    <TCategoristyled >
        {potovideo.map((potovid: producttype) => {
            return (

                <div 
                key={potovid.id}
                onClick={() => {
                    setProductId(potovid.id);
                    navigate(`/products/${potovid.id}`);
                    
                }}>

                    <img src={potovid.image} /> 
                    <p>{potovid.price} ₾</p>
                    <h1>{potovid.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>
   );
}