import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Avatar, Popover, Input } from "antd";
import logoo from "../../assets/images/logoo.png";
import { THeder } from "./Heder.styled";
import { FiShoppingCart } from "react-icons/fi";

import { SignInModal } from "@src/modules/SignInModal"; 
import { SignUpModal } from "@src/modules/SignUpModal";

import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthorizationStage_Enum } from "@src/provider/AuthProvider/AuthContext";
import { composeAvatarName } from "../../utils/composeAvatarName";

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
      <div className="flex flex-col gap-3">
         <Button onClick={() => navigate("/orders")}>შეკვეთები</Button>
         <Button type='primary' onClick={() => navigate("/profile")}>პროფილი</Button>
         <Button onClick={logaut}>გამოსვლა</Button>
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
     <THeder className="p-3 bg-transparent flex justify-between "> 
        <div>
         <img className="rounded-md	w-11 h-10 " src={logoo} />
         <Input  placeholder="ძებნა"/>
        </div>
          {authStage === TAuthorizationStage_Enum.AUTHORIZED 
          ?  AuthorizedView
          : UnauthorizedView
          }
         
        {showSignIn && <SignInModal onCancel={() => setShowSignIn(false)}/>}
        {showSignUp && <SignUpModal onCancel={() => setShowSignUp(false)}/>}
   </THeder>

    );
}