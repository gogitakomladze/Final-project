import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { MainLayout } from "./layouts/MainLayout";
import { Routes ,Route } from "react-router-dom"; 
function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
