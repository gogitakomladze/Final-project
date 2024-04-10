import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@src/provider/GlobalProvider";
import cartDeleteRequest from "@src/utils/CartDeleteRequest";

import { TLikeProduct } from "@src/@types/requestTypes";
import axios from "axios";


import {  DeleteOutlined, LoadingOutlined} from '@ant-design/icons';




export function Likepage() {
  const [likeproduct, setLikeProduct] = useState<TLikeProduct[]>([]);
  const [selectSavedProduct, setSelectSavedProduct] = useState<string[]>([]);
  const [countProducts, setCountProducts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
   console.log(likeproduct)
  const {
    countLikeProducts,
    setCountLikeProducts,
  } = useContext(GlobalContext);
  async function getLikeProducts() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/liked-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLikeProduct(response.data);
      setLoading(false);

      setCountProducts(Object.keys(response.data).length);
      
    } catch (error) {
      console.log("Error Requesting Cart Products", error);
    } finally {
    }
  }
  
 

  const token = localStorage.getItem("access_token");

  const storedPurchasedItem = JSON.parse(
    localStorage.getItem("purchased item") || "{}"
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "header cart count",
      JSON.stringify(countLikeProducts)
    );
  }, [countLikeProducts]);

  setCountLikeProducts(countProducts - selectSavedProduct.length);
  

  useEffect(() => {
    getLikeProducts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(
        "saved products",
        JSON.stringify(selectSavedProduct)
      );
    }, 1000);
  }, [selectSavedProduct]);

  useEffect(() => {
    const savedProducts = JSON.parse(
      localStorage.getItem("saved products") || "[]"
    );
    setSelectSavedProduct(savedProducts);
  }, []);

  async function deleteCartProduct(cartProductId: string) {
    try {
      cartDeleteRequest({ cartProductId, token });
      getLikeProducts();
    } catch (error) {
      console.log("Couldn't Remove The Product", error);
    } finally {
    }
  }



 

  const filterPurchasedItems = likeproduct.filter((item) => {
    return !storedPurchasedItem
      .map((stored: any) => stored.id)
      .includes(item.likeProduct?.id);
  });

  if (loading) {
    return <div id="loading"><LoadingOutlined/></div>;
  }


 return (


<div>

    <div>
{filterPurchasedItems?.map((Item) => {
    return (
        <div>            
          

        </div>
       
        
    )
})}
</div>
</div>
 )
}
