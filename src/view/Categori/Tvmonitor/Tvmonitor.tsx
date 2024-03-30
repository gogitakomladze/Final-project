import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Tvmonitor() {
    
  const [monitor, setmonitor] = useState([]);

  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

async function getSmartphon() {
    try{
    const resp = await publicAxios.get("/product?categoryName=TV | მონიტორები&page=1&pageSize=30");
    setmonitor(resp.data.products);
   }catch(error){
    console.log("error", error)
   }

  }
  

   useEffect(() => {
    getSmartphon();
   }, [])


   return (
    <>
   <h1 id="categoriTitle">მონიტორები</h1>
    <TCategoristyled>
    
    
        {monitor.map((monitor: producttype) => {
            return (

                <div 
                key={monitor.id} 
                onClick={() => {
                    setProductId(monitor.id);
                    navigate(`/products/${monitor.id}`);
                    
                }}
                >

                    <img src={monitor.image} /> 
                    <p>{monitor.price} ₾</p>
                    <h1>{monitor.title}</h1> 

                </div>
            )
        })}
    
    </TCategoristyled>
    </>
   );
}