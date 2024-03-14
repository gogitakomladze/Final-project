import { useEffect, useState } from "react";
import axios from "axios";
import { TNavigateCategori, NCategori  } from "./Navigation.styled";

export function Navigation() {
 type categoritype = {
    created_at: string,
    id: string,
    image:string,
    name: string,
    updated_at:string,
}

    const [categories, setCategories] = useState([]);
    async function getCategories(){
       const resp =  await axios.get("http://localhost:3000/product-category");
       setCategories(resp.data);
      }
    useEffect(() => {
      getCategories();
    }, []);
    console.log(categories)

    
    return (
        <div>
            {categories.map((categori: categoritype) => {
        return (
                <div key={categori.id}>
              <a href="#" key={categori.name}>{categori.name}</a>
              <img key={categori.image} src={categori.image} />
                </div>
        )  
      })}
        </div>
    )
}