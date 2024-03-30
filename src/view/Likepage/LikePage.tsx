import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@src/provider/GlobalProvider";
import LikeDeleteRequest from "@src/utils/LikeDeleteRequest";

import { TLikeProduct } from "@src/@types/requestTypes";
import axios from "axios";


import {  DeleteOutlined, LoadingOutlined} from '@ant-design/icons';




export function LikePage() {
  const [likeproduct, setLikeproduct] = useState<TLikeProduct[]>([]);
  const [selectSavedProduct, setSelectSavedProduct] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
 

  const {
    countLikeProducts,
    setCountLikeProducts,
    countProducts,
    setCountProducts,
    purchasedItem,
  } = useContext(GlobalContext);

  async function Getlikeproduct() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/liked-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLikeproduct(response.data);
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
    Getlikeproduct();
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

  async function deleteCartProduct(LikeProductId: string) {
    try {
      LikeDeleteRequest({ LikeProductId, token });
      Getlikeproduct();
    } catch (error) {
      console.log("Couldn't Remove The Product", error);
    } finally {
    }
  }



  useEffect(() => {
    localStorage.setItem("purchased item", JSON.stringify(purchasedItem));
  }, [purchasedItem]);

  const filterPurchasedItems = likeproduct.filter((item) => {
    return !storedPurchasedItem
      .map((stored: any) => stored.id)
      .includes(item.likeProduct.id);
  });

  if (loading) {
    return <div id="loading"><LoadingOutlined/></div>;
  }

 return (


<>

    

</>
 

 );
}