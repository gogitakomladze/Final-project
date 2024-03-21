import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Avatar, Popover, Input } from "antd";
import logoo from "../../assets/images/logoo.png";
import { THeder,NTranslate } from "./Heder.styled";
import { FiShoppingCart } from "react-icons/fi";

import { SignInModal } from "@src/modules/SignInModal"; 
import { SignUpModal } from "@src/modules/SignUpModal";

import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthorizationStage_Enum } from "@src/provider/AuthProvider/AuthContext";
import { composeAvatarName } from "../../utils/composeAvatarName";
import { Translate } from "@src/components/Translate";

export function LayoutHeader() {
   const {authStage, userData, logaut} = useAuthProvider();
   const navigate = useNavigate();

   const [showSignUp, setShowSignUp] = useState<boolean>(false);
   const [showSignIn, setShowSignIn] = useState<boolean>(false)
   
   const AuthorizedView = useMemo(
   () => (
<div>
   
   <Button className="mr-5 rounded-md  " ><FiShoppingCart/></Button>
   <Popover
    content={ 
      <div className=" gap-3">

           <div className=" mb-10"><h3 className="mr-2">გამარჯობა,</h3> <h4>{(userData?.first_name || "") + "  " + (userData?.last_name || "")}</h4></div>
         <Button onClick={() => navigate("/orders")}>შეკვეთები</Button>
         <Button className="ml-2 bg-black" type='primary' onClick={() => navigate("/profile")}>პროფილი</Button>
         <Button className="ml-2" onClick={logaut}>გამოსვლა</Button>
    </div>
   }>
      <Avatar>
      {composeAvatarName(userData?.first_name, userData?.last_name)}
      </Avatar>
   </Popover>
</div>
   ),
   [userData]
);


const UnauthorizedView = useMemo(() =>(
   <div>
   <Space>
        <Button  className="bg-black" type='primary' onClick={() => setShowSignIn(true)}>შესვლა</Button>
        <Button onClick={() => setShowSignUp(true)}> რეგისტრაცია</Button>
  </Space>
  </div>
), [])


    return(
      <>
     <NTranslate>
      <Translate></Translate>
      </NTranslate>
     <THeder className="p-3 bg-transparent flex justify-between "> 
        <div>
         <img className="rounded-md	w-11 h-10 " src={logoo} onClick={() => navigate("/")}/>
         <Input  placeholder="ძებნა"/>
        </div>
          {authStage === TAuthorizationStage_Enum.AUTHORIZED 
          ?  AuthorizedView
          : UnauthorizedView
          }
         
        {showSignIn && <SignInModal onCancel={() => setShowSignIn(false)}/>}
        {showSignUp && <SignUpModal onCancel={() => setShowSignUp(false)}/>}
   </THeder>
    
    </>
    );
}