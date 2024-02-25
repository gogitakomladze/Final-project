import { useAuthProvider } from "../../provider/AuthProvider"
import { TMargin } from "./Home.styled";
export function Home() {
    const { userData } = useAuthProvider();
    return (
        <>
        <TMargin>
            <h1>Hello World</h1>
    <div>{(userData?.first_name || "") + "  " + (userData?.last_name || "")}</div>
        </TMargin> 
  </>
    )
    
}