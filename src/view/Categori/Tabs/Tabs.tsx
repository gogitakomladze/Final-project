import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Popover } from "antd";


export function Tabs() {

  const [tabs, settabs] = useState([]);
  const [priseserch, setpriseserch] = useState('')

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

    <Popover
     content={
      <div id="serchcase" >
   {tabs?.filter((item: producttype) => {
   return priseserch.toLowerCase() ===''
   ? item
   : item.title.toLowerCase().includes(priseserch);
   
  })
  
  .map((item: producttype) => {
    if(priseserch === "" ){
        return(
           <div> </div>
        )
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
                    <div className="category-price">{tab?.salePrice ? <p><b>Sale : {tab?.salePrice} ₾ </b> <del>{tab.price} ₾</del></p>:<b>{tab?.price} ₾</b>}</div>
                    <h1>{tab.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>

   );
}