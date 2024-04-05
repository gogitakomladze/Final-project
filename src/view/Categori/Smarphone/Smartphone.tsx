import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Popover } from "antd";


export function Smartphon() {

  const [smartphon, setSmartphon] = useState([]);
  const [priseserch, setpriseserch] = useState('')


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

    <Popover
     content={
      <div id="serchcase" >
   {smartphon?.filter((item: producttype) => {
   return priseserch.toLowerCase() ===''
   ? item
   : item.title.toLowerCase().includes(priseserch);
   
  })
  
  .map((item: producttype) => {
    if(priseserch === ""){
        return <div></div>
      }
   return (
      
         <div 
         key={item.id}
           onClick={() => {
            setProductId(item.id);
            navigate(`/products/${item.id}`);
           }}
         >
          <img src={item.image} />
          </div>
        
   )
  })}
     </div>
     }>
   <div id="pricefilter">
   <h5>ბრენდის მიხედვით ფილტრი</h5>
        <input placeholder="ფასი" onChange={(e) => setpriseserch(e.target.value)} />
    </div>
   
   </Popover>

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