import { useGetProducts } from "@src/hooks/useGetProduct/useGetProduct";
import {TProduct} from "../../components/Products/product.styled"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "@src/provider/GlobalProvider";
import { LoadingOutlined} from '@ant-design/icons';



export function Products() {
    const {products } = useGetProducts();
    const {
        setProductId,
        loading,
        setLoading,
    } = useContext(GlobalContext);
    const navigate = useNavigate();
    if (loading) {
        return <div id="loading"><LoadingOutlined/></div>;
      }
   return (
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
                    <p>{product.price} ₾</p>
                    <h1>{product.title}</h1> 
                    
                </div>
            )
        })}
    </TProduct>
   );
}