import axios from "axios"
import { useState, useEffect } from "react"
import {TProduct} from "../../components/Products/product.styled"

export function Products() {
 
    type producttype = {
        id: string,
        title: string,
        description: string,
        image: string,
        price: number
    }

   const [products, setProducts] = useState([]);

   async function getProducts() {
    const resp = await axios.get("http://localhost:3000/product?page=1&pageSize=20");
    setProducts(resp.data.products);
   }
   useEffect(() => {
    getProducts();
   }, [])

   
   return (
    <TProduct >
        {products.map((product: producttype) => {
            return (

                <div key={product. id}>
                    
                    <img src={product.image} /> 
                    <p>{product.price} ₾</p>
                    <h1>{product.title}</h1> 
                    
                </div>
            )
        })}
    </TProduct>
   );
}