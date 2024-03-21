import { useGetProducts } from "@src/hooks/useGetProduct/useGetProduct";
import {TProduct} from "../../components/Products/product.styled"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "@src/provider/GlobalProvider";

export function Products() {
    const {products, } = useGetProducts();
    const {
        setProductId
    } = useContext(GlobalContext)
    const navigate = useNavigate();

   return (
    <TProduct >
        {products?.map((product) => {
            return (

                <div 
                key={product.id}
                onClick={() => {
                    setProductId(product.id);
                    navigate(`/products/${product.id}`)
                }}
                >
                    
                    <img src={product.image} /> 
                    <p>{product.price} ₾</p>
                    <h1>{product.title}</h1> 
                    
                </div>
            )
        })}
    </TProduct>
   );
}