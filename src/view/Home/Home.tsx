import { useAuthProvider } from "../../provider/AuthProvider"

export function Home() {
    const { userData } = useAuthProvider();
    return (
        <>
            <h1>Hello World</h1>
    <div>{(userData?.first_name || "") + "  " + (userData?.last_name || "")}</div>
   </>
    )
    
}