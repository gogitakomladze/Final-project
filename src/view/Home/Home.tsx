import { Tpage } from "./Home.styled";
import { Navigation } from "../../components/Navigate";
import { Products } from "../../components/Products";

import { Pagination } from 'antd';



export function Home() {
   
    const  App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

    return (
        <>
         <Navigation />
        <Products/>
       
        
        <Tpage>
            <App/>
        </Tpage> 
        </>
    )
    
}