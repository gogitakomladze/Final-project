import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "@src/provider/GlobalProvider"
import { useParams, useNavigate } from "react-router-dom"

import { FiShoppingCart } from "react-icons/fi";

import cartPostRequest from "@src/utils/CartPostRequest";
import LikePostRequest from "@src/utils/LikePostRequest";

import { publicAxios } from "@src/utils/publicAxios"

import { producttype } from "@src/@types/requestTypes"

import { SignInModal } from "@src/modules/SignInModal";

import {HeartOutlined, LoadingOutlined} from '@ant-design/icons';

import { TOneProduct, TshopCard } from "./OneProductPage.styled"
import { useAuthProvider } from "@src/provider/AuthProvider";
export  function OneProductPage() {
    const {
        productId,
        setProductId,
        products,
        setProducts,
        loading,
        setLoading,
        countLikeProducts,
        setCountLikeProducts,
        countCartProducts,
        setCountCartProducts,
    } = useContext(GlobalContext);
    const [oneProduct, setOneProduct] = useState<producttype | null>(null);
    const [firstSponsored, setFirstSponsored] = useState<producttype | null>(
        null
      );
      const [loader, setLoader] = useState<boolean>(false);
    const [SecondSponsored, setSecondSponsored] = useState<producttype | null>(
        null
      ); 

      const [cartAdded, setCartAdded] = useState<boolean>(false);
      const [likeAdded, setLikeAdded] = useState<boolean>(false);


      const {authStage, userData, logaut} = useAuthProvider();


      const [showSignIn, setShowSignIn] = useState<boolean>(false);


      const {id} = useParams();

    const token = localStorage.getItem("access_token");

    const navigate = useNavigate();

    async function getOneProduct() {
        try {
            const response = await publicAxios.get(
                `product?pageSize=30`
            );

            setProducts(response.data.products);
            const products = response.data.products;


         if (products.length > 0) {
                const randomIndex = Math.floor(Math.random() * products.length - 1);
                setFirstSponsored(products[randomIndex]);
                setSecondSponsored(products[randomIndex + 1]);
              }
             const product = response.data.products.find(
                (product: producttype) => product.id === id
             );
             setOneProduct(product);
        } catch (error) {
            console.log("Error Loading Product", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (id) {
            getOneProduct();
            setProductId(id);
        }
    }, [id]);

    //auth and unauth

    // function AuthOnUnAuth() {
    //     if(authStage === "un")
    // }

      async function addToCart() {
        if(authStage === "unatorized") {
             setShowSignIn(true);
            
        }else{
        try {
            await cartPostRequest(productId, token);
            setCountCartProducts(countCartProducts + 1);
        } catch (error) {
            console.log("error Loading Cart", error)
        }
      }
    }
    
      
      async function addToLike() {
        try{
            await LikePostRequest(productId, token);
            setCountLikeProducts(countLikeProducts + 1);
        }catch (error) {
            console.log("error loading like", error)
        }
      }


      if (loading) {
        return <div id="loading"><LoadingOutlined /></div>;
      }


    return (
        <TOneProduct>
        <div className="flex justify-between">
            <div onClick={() => navigate("/products")}>
                <a >პროდუქტებში გადასვლა</a>
                </div>
           
           <button id="LikeButton" 
            onClick={() => {
                addToLike();
                setLoader(true);
                setTimeout(() => {
                    setLikeAdded(true);
                    setLoader(false);
                }, 1000)
             }}
           ><HeartOutlined/></button>
        </div>
        <div className="flex justify-between mt-10"> 
            <h1>{oneProduct?.title}</h1>
            <h6>ID:{oneProduct?.id}</h6>
        </div>
        <div className="flex justify-between items-center mt-10">
        <img src={oneProduct?.image} alt="Product Image" />
        
         <p>{oneProduct?.description}</p>
       
        <TshopCard>

            <div className="one-product-sale">{oneProduct?.salePrice ? <p><b>Sale : {oneProduct?.salePrice} ₾</b> {oneProduct.price} ₾</p>:<b>{oneProduct?.price} ₾</b>}</div>
        
        <p>უფასო მიწოდება 3 საათში</p>
        <div>
       <div>
       <p>კალათაში არის <b> {countCartProducts}</b> პროდუქტი</p> 
       </div>
        </div>
        
        <button id="addCap"
         onClick={() => {
            addToCart();
            setLoader(true);
            setTimeout(() => {
                setCartAdded(true);
                setLoader(false);
            }, 1000)
         }}
     >
            <FiShoppingCart/><b>კალათაში დამატება</b>
            </button>
        <button id="buy" ><b>ყიდვა</b></button>
        </TshopCard>
        </div>

        {showSignIn && <SignInModal onCancel={() => setShowSignIn(false)}/>}

        </TOneProduct>


    )
}