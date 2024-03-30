import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Audio() {

  const [audios, setAudio] = useState([]);

  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

   async function getSmartphon() {
    const resp = await publicAxios.get("/product?categoryName=აუდიო&page=1&pageSize=30");
    setAudio(resp.data.products);
   }
   useEffect(() => {
    getSmartphon();
   }, [])


   return (

    <>
             <h1 id="categoriTitle">აუდიო</h1>

    <TCategoristyled >
        {audios.map((audio: producttype) => {
            return (

                <div 
                key={audio.id}
                onClick={() => {
                    setProductId(audio.id);
                    navigate(`/products/${audio.id}`);
                    
                }}
                >

                    <img src={audio.image} /> 
                    <p>{audio.price} ₾</p>
                    <h1>{audio.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>

   );
}