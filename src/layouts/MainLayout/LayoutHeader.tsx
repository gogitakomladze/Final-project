import { useState } from "react";

import { Button, Space } from "antd";
import Logo from "../../assets/images/logo.svg";

import { SignInModal } from "@src/modules/SingInModal"; 
import { SignUpModal } from "@src/modules/SingUpModal/SingUpModal";

export function LayoutHeader() {

   const [showSignUp, setShowSignUp] = useState<boolean>(false);
   const [showSignIn, setShowSignIn] = useState<boolean>(false)


    return(
     <div className=" p-3 bg-slate-500 flex justify-between "> 
     <img src={Logo} />
        <Space>
           <Button type='primary' onClick={() => setShowSignIn(true)}>Login</Button>
           <Button onClick={() => setShowSignUp(true)}>Register</Button>
        </Space>

        {showSignIn && <SignInModal onCancel={() => setShowSignIn(false)}/>}
        {showSignUp && <SignInModal onCancel={() => setShowSignUp(false)}/>}


     </div>
    );
}