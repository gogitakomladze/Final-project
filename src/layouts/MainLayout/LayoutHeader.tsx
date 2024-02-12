import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Avatar, Popover } from "antd";
import Logo from "../../assets/images/logo.svg";

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
   <Popover
    content={ 
      <div className="flex flex-col gap-3">
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
        <Button type='primary' onClick={() => setShowSignIn(true)}>შესვლა</Button>
        <Button onClick={() => setShowSignUp(true)}> რეგისტრაცია</Button>
  </Space>
  </div>
), [])


    return(
     <div className=" p-3 bg-slate-500 flex justify-between "> 
     <img src={Logo} />

          {authStage === TAuthorizationStage_Enum.AUTHORIZED 
          ?  AuthorizedView
          : UnauthorizedView
          }
         
        {showSignIn && <SignInModal onCancel={() => setShowSignIn(false)}/>}
        {showSignUp && <SignUpModal onCancel={() => setShowSignUp(false)}/>}


     </div>
    );
}