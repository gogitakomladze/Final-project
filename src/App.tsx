import { Home } from "./view/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Routes ,Route } from "react-router-dom"; 
function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
