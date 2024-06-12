import { useGetProducts } from "@src/hooks/useGetProduct/useGetProduct";
import {TProduct, Caruseli} from "../../components/Products/product.styled"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "@src/provider/GlobalProvider";
import { LoadingOutlined} from '@ant-design/icons';
import { useGetProductsSale } from "@src/hooks/useGetSaleproducts/useGetSaleproducts";

import { Carousel } from 'antd';


export function Products() {
    const {products } = useGetProducts();
    const {productsSale} =useGetProductsSale();
    const {
        setProductId,
        loading,
        setLoading,
    } = useContext(GlobalContext);
    const navigate = useNavigate();
    if (loading) {
        return <div id="loading"><LoadingOutlined/></div>;
      }


      //carusel
      const contentStyle: React.CSSProperties = {
        height: '300px',
        width: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#000000',

      };
   return ( 
    <>
    <div id="carusel">
        <h4 className="mb-5">ფასდაკლება</h4>
        <Carousel autoplay>
          {productsSale?.map((item) => {
            return(
               <Caruseli key={item.id}
               onClick={() => {
                setProductId(item.id);
                navigate(`/products/${item.id}`);
                setLoading(true);
            }}
               >

                <div id="sale-product-description">
                <img src={item.image} style={contentStyle}/> 
                <h3>{item.description}</h3>
               </div>


              <div id="caruselfooter">
                <h2>{item.salePrice}₾</h2>
               <h3><s>{item.price}</s> ₾</h3>

             </div>
          </Caruseli>
            )
          })}
   
  
  </Carousel>

  </div>
    <TProduct >
       
        {products?.map((product) => {
            return (

                <div 
                key={product.id}
                onClick={() => {
                    setProductId(product.id);
                    navigate(`/products/${product.id}`);
                    setLoading(true);
                }}
                >
                   <img src={product.image} /> 
                    {product.salePrice ? <div className="product-sale"><b>{product.salePrice} ₾</b> <del>{product.price}</del>  ₾ </div>: <b className="price">{product.price} ₾</b>}
                    <h1>{product.title}</h1> 
                    
                </div>
            )
        })}
    </TProduct>
    </>
   );
}