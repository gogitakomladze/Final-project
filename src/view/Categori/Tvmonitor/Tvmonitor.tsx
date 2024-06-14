import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Popover } from "antd";

export function Tvmonitor() {
    
  const [monitor, setmonitor] = useState([]);
  const [priceserch, setpriceserch]=useState('');

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
    
    <Popover
     content={
      <div id="serchcase" >
   {monitor?.filter((item: producttype) => {
   return priceserch.toLowerCase() ===''
   ? item
   : item.title.toLowerCase().includes(priceserch);
   
  })
  
  .map((item: producttype) => {
    if(priceserch === ""){
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
        <input placeholder="ფასი" onChange={(e) => setpriceserch(e.target.value)} />
    </div>
   
   </Popover>
    
        {monitor.map((mon: producttype) => {
            return (

                <div 
                key={mon.id} 
                onClick={() => {
                    setProductId(mon.id);
                    navigate(`/products/${mon.id}`);
                    
                }}
                >

                    <img src={mon.image} /> 
                    <div className="category-price">{mon?.salePrice ? <p><b>Sale : {mon?.salePrice} ₾ </b> <del>{mon.price} ₾</del></p>:<b>{mon?.price} ₾</b>}</div>
                    <h1>{mon.title}</h1> 

                </div>
            )
        })}
    
    </TCategoristyled>
    </>
   );
}