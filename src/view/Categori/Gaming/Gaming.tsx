import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";
import { Popover } from "antd";


import { useNavigate } from "react-router-dom";

export function Gaming() {

  const [gaming, setGaming] = useState([]);
  const [priseserch, setpriseserch] = useState('')


  const {
    setProductId,
} = useContext(GlobalContext);

const navigate = useNavigate();

   async function getSmartphon() {
    const resp = await publicAxios.get("/product?categoryName=გეიმინგი&page=1&pageSize=30");
    setGaming(resp.data.products);
   }
   useEffect(() => {
    getSmartphon();
   }, [])


   return (
    <>
         <h1 id="categoriTitle">გეიმინგი</h1>

    
    <TCategoristyled >
    <Popover
     content={
      <div id="serchcase" >
   {gaming?.filter((item: producttype) => {
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
        {gaming.map((game: producttype) => {
            return (

                <div
                 key={game.id}
                 onClick={() => {
                    setProductId(game.id);
                    navigate(`/products/${game.id}`);
                    
                }}
                 >

                    <img src={game.image} /> 
                    <div className="category-price">{game?.salePrice ? <p><b>Sale : {game?.salePrice} ₾ </b> <del>{game.price} ₾</del></p>:<b>{game?.price} ₾</b>}</div>
                     <h1>{game.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>
   );
}