import { Outlet } from "react-router-dom"
import { LayoutHeader } from "./LayoutHeader"
import { Footer } from "./LayoutFooter";

export function MainLayout() {
    return (
    <div>
        <LayoutHeader/>
        <Outlet/>
        <Footer/>
    </div>
    );
}