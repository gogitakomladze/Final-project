import { useState, useEffect } from "react"
import { producttype } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { TCategoristyled } from "../categori.styled";

import { GlobalContext } from "@src/provider/GlobalProvider";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Gaming() {

  const [gaming, setGaming] = useState([]);

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
                    <p>{game.price} ₾</p>
                    <h1>{game.title}</h1> 

                </div>
            )
        })}
    </TCategoristyled>
    </>
   );
}