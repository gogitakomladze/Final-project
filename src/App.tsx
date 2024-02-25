import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { Orders } from "./view/Orders";
import { MainLayout } from "./layouts/MainLayout";
import { Routes ,Route } from "react-router-dom"; 
import { PrivateChild } from "./modules/PrivateRoute";


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
        path="/Orders"
      element={<PrivateChild children={<Orders/>} />}
      />
      </Route>
    </Routes>

  );
}

export default App;
