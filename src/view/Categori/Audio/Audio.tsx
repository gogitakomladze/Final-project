import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";
import { Popover } from "antd";


import { useNavigate } from "react-router-dom";

export function Audio() {

  const [audios, setAudio] = useState([]);
  const [priseserch, setpriseserch] = useState('')


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
    <Popover
     content={
      <div id="serchcase" >
   {audios?.filter((item: producttype) => {
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
                    <div className="category-price">{audio?.salePrice ? <p><b>Sale : {audio?.salePrice} ₾ </b> <del>{audio.price} ₾</del></p>:<b>{audio?.price} ₾</b>}</div>
                    <h1>{audio.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>

   );
}