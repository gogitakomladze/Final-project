import { Outlet } from "react-router-dom"
import { LayoutHeader } from "./LayoutHeader"
import { Footer } from "./LayoutFooter";
import { Categori } from "@src/components/Navigate";
export function MainLayout() {
    return (
    <div>
    <LayoutHeader/>
       <Categori/>
        <Outlet/>
        <Footer/>
    </div>
    );
}