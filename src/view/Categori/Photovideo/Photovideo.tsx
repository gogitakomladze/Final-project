import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";
import { Popover } from "antd";


import { useNavigate } from "react-router-dom";

export function Photovideo() {

  const [potovideo, setpotovideo] = useState([]);
  const [priseserch, setpriseserch] = useState('')


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
    <Popover
     content={
      <div id="serchcase" >
   {potovideo?.filter((item: producttype) => {
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