import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { Orders } from "./view/Orders";
import { MainLayout } from "./layouts/MainLayout";
import { Routes ,Route } from "react-router-dom"; 
import { PrivateChild } from "./modules/PrivateRoute";
import { CartPage } from "./view/CartPage";
import { LikePage } from "./view/Likepage";

import { Smartphon } from "./view/Categori/Smarphone";
import { Photovideo } from "./view/Categori/Photovideo";
import { Gaming } from "./view/Categori/Gaming";
import { Laptop } from "./view/Categori/Laptop";
import { Tvmonitor } from "./view/Categori/Tvmonitor";
import { Audio } from "./view/Categori/Audio";
import { Tabs } from "./view/Categori/Tabs";

import { Products } from "./components/Products";
import { OneProductPage } from "./view/OneProductPage";


function App() {
 
  return (
    <Routes>
 
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>}></Route>
     <Route
      path="/profile"
      element={<PrivateChild children={<Profile />} />}
      />
     
      <Route
        path="/CartPage"
      element={<PrivateChild children={<CartPage/>} />}
      />
       <Route
        path="/LikePage"
      element={<PrivateChild children={<LikePage/>} />}
      />
      <Route
        path="/Orders"
      element={<PrivateChild children={<Orders/>} />}
      />
      <Route path="/Smartphone" element = {<Smartphon/>}/>
      <Route path="/Photovideo" element ={ <Photovideo/>} />
      <Route path="/Gaming" element ={ <Gaming/>} />
      <Route path="/Laptop" element ={ <Laptop/>} />
      <Route path="/Tvmonitor" element ={<Tvmonitor/>} />
      <Route path="/Audio" element ={<Audio/>} />
      <Route path="/Tabs" element ={<Tabs/>}/>  
      
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={ <OneProductPage/>}/>
      </Route>

    
    </Routes>

  );
}

export default App;
