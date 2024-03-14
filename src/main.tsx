import ReactDOM from "react-dom/client";
import App from "@src/App";
import { BrowserRouter } from "react-router-dom"; 


import { Providers } from "./provider/Providers"
import "./assets/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
);
