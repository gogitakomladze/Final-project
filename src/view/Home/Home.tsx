import { Tpage } from "./Home.styled";
import { Pagination } from 'antd';
import { Categori } from "@src/components/Navigate";
import { Products } from "@src/components/Products";


export function Home() {
   
    const  App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

    return (
        <>
        <Categori/>
        <Products/>
        <Tpage>
            <App/>
        </Tpage> 
        </>
    )
    
}