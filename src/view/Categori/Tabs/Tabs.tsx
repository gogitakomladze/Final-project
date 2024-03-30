import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Tabs() {

  const [tabs, settabs] = useState([]);

  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

   async function getSmartphon() {
    const resp = await publicAxios.get("/product?categoryName=ტაბები&page=1&pageSize=30");
    settabs(resp.data.products);
   }
   useEffect(() => {
    getSmartphon();
   }, [])


   return (
    <>  
     <h1 id="categoriTitle">ტაბები</h1>
    <TCategoristyled >
        {tabs.map((tab: producttype) => {
            return (

                <div
                 key={tab.id}
                 onClick={() => {
                    setProductId(tab.id);
                    navigate(`/products/${tab.id}`);
                    
                }}
                 >

                    <img src={tab.image} /> 
                    <p>{tab.price} ₾</p>
                    <h1>{tab.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>

   );
}