import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Avatar, Popover, Input } from "antd";
import logoo from "../../assets/images/logoo.png";
import { THeder,NTranslate } from "./Heder.styled";
import { FiShoppingCart } from "react-icons/fi";
import {HeartOutlined} from '@ant-design/icons';
import { publicAxios } from "@src/utils/publicAxios";

import { SignInModal } from "@src/modules/SignInModal"; 
import { SignUpModal } from "@src/modules/SignUpModal";

import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthorizationStage_Enum } from "@src/provider/AuthProvider/AuthContext";
import { composeAvatarName } from "../../utils/composeAvatarName";
import { Translate } from "@src/components/Translate";
import { producttype } from "@src/@types/requestTypes";

import { useContext } from "react";
import { GlobalContext } from "@src/provider/GlobalProvider";




export function LayoutHeader() {
   const {authStage, userData, logaut} = useAuthProvider();


   const navigate = useNavigate();

   const [showSignUp, setShowSignUp] = useState<boolean>(false);
   const [showSignIn, setShowSignIn] = useState<boolean>(false);
   
   const [searchdata, setsearchdata] = useState<producttype[]>();
   const [search, setSearch] =useState("");
   
   const {
      setProductId,
  } = useContext(GlobalContext);

   const AuthorizedView = useMemo(
   () => (
<div>
   <button id="LikeButtonn" onClick={() => navigate("./LikePage")}><HeartOutlined/></button>
   <Button id="Cartbutton" className="mr-5 rounded-md " onClick={() => navigate("./CartPage")} ><FiShoppingCart/></Button>
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

async function getSearchproduct(){
   const resp = await publicAxios.get(`/product?page=1&pageSize=30`);
   setsearchdata(resp.data.products);
}
useEffect(() => {
   getSearchproduct();
}, []);



    return(
      <>
     <NTranslate>
      <Translate></Translate>
      </NTranslate>
     <THeder className="p-3 bg-transparent flex justify-between "> 
        <div>
         <img className="rounded-md	w-11 h-10 " src={logoo} onClick={() => navigate("/")}/>
         
         
         <Popover
     content={
      <div id="serchcase" >
   {searchdata?.filter((item) => {
   return search.toLowerCase() === ''
   ? item
   : item.title.toLowerCase().includes(search);
  })
  
  .map((item) => {
   if(search === "" ){
      return(
         <div> </div>
      )
   }
   return (
      
         <div 
         key={item.id}
           onClick={() => {
            setProductId(item.id);
            navigate(`/products/${item.id}`);
           }}
         >
          <img src={item.image} />
          </div>
        
   )
  })}
     </div>
     }>
   
    <Input  placeholder="ძებნა"  onChange={(e) => setSearch(e.target.value)}/>
   
   </Popover>
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