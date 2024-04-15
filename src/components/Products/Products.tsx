import { useGetProducts } from "@src/hooks/useGetProduct/useGetProduct";
import {TProduct} from "../../components/Products/product.styled"
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
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#020711',

      };
   return ( 
    <>
    <div id="carusel">
        <h4 className="mb-5">ფასდაკლება</h4>
        <Carousel autoplay>
          {productsSale?.map((item) => {
            return(
               <div key={item.id}>
          <img src={item.image} style={contentStyle}/>
        </div>
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
                    <nav id="price"> 
                    <p><b>{product.salePrice} </b></p>
                        <p>{product.price} ₾</p>
                    </nav>
                    
                    <h1>{product.title}</h1> 
                    
                </div>
            )
        })}
    </TProduct>
    </>
   );
}