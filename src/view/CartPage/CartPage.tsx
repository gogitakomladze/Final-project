import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@src/provider/GlobalProvider";
import cartDeleteRequest from "@src/utils/CartDeleteRequest";

import { TCartProducts } from "@src/@types/requestTypes";
import axios from "axios";

import { Tbuy, Tcartproduct, Cartpage } from "./cartpage.styled";

import {  DeleteOutlined, LoadingOutlined} from '@ant-design/icons';




export function CartPage() {
  const [cartProducts, setCartProducts] = useState<TCartProducts[]>([]);
  const [selectSavedProduct, setSelectSavedProduct] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
   
  const {
    countCartProducts,
    setCountCartProducts,
    countProducts,
    setCountProducts,
    purchasedItem,
  } = useContext(GlobalContext);

  async function getCartProducts() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartProducts(response.data);
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
      JSON.stringify(countCartProducts)
    );
  }, [countCartProducts]);

  setCountCartProducts(countProducts - selectSavedProduct.length);
  

  useEffect(() => {
    getCartProducts();
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
      getCartProducts();
    } catch (error) {
      console.log("Couldn't Remove The Product", error);
    } finally {
    }
  }



  useEffect(() => {
    localStorage.setItem("purchased item", JSON.stringify(purchasedItem));
  }, [purchasedItem]);

  const filterPurchasedItems = cartProducts.filter((item) => {
    return !storedPurchasedItem
      .map((stored: any) => stored.id)
      .includes(item.cartProduct.id);
  });

  if (loading) {
    return <div id="loading"><LoadingOutlined/></div>;
  }


 return (


<Cartpage>

    <div>
{filterPurchasedItems?.map((Item) => {
    return (
        <Tcartproduct>
            <img src={Item.cartProduct.image} />
            <p>{Item.cartProduct.title}</p> 
            <div>
            <h5>{Item.count}</h5>
            </div>
            <h2>{Item.cartProduct.price} ₾</h2>
           
           <button onClick={() => {
            deleteCartProduct(Item.id);
            setTimeout(() => {
                window.location.reload();
            }, 1000);

           }}><DeleteOutlined /></button>  
        </Tcartproduct>
       
        
    )
})}
</div>
     <Tbuy>
            <h1>გადახდა</h1>
            
            <div id="totalprice">
                <p><b>ჯამური ღირებულება</b></p>
                <p><b></b></p>
            </div>
            <div >
                <button><b>ყიდვა</b></button>
            </div>
        </Tbuy>
        </Cartpage>

    )
}