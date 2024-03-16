import { Tpage } from "./Home.styled";
import { Products } from "../../components/Products";
import { Categori } from "@src/components/Navigate";

import { Pagination } from 'antd';



export function Home() {
   
    const  App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

    return (
        <>
         <Categori />
        <Products/>
       
        
        <Tpage>
            <App/>
        </Tpage> 
        </>
    )
    
}