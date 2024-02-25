import { FaRegUser } from "react-icons/fa";
import { useAuthProvider } from "../../provider/AuthProvider"
import { TProfile, TParametr } from "./Profile.styled";

export function Profile() {
    const { userData } = useAuthProvider();
    return (
        <>
        <TProfile >
        < FaRegUser className="text-3xl mr-5" />
      <h2>გამარჯობა,   {(userData?.first_name || "") + "  " + (userData?.last_name || "")}</h2>
     
        </TProfile> 
         <TParametr>
            <nav>
            <h4>პარამეტრები</h4>
            <p>პირადი ინფორმაცია</p>
            </nav>
            <div>
                <h4>მეილი:</h4>
                <p>{(userData?.email || "")}</p>
           </div>
           <div>
                <h4>სახელი, გვარი:</h4>
                <p>{(userData?.first_name || "") + "  " + (userData?.last_name || "")}</p>
           </div>
           <div className="mb-20">
                <h4>მობილურის ნომერი:</h4>
                <p>{(userData?.phone_number || "")}</p>
           </div>

         </TParametr>

        </>
    )
}