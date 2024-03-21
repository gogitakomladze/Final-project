import ReactDOM from "react-dom/client";
import App from "@src/App";


import { Providers } from "./provider/Providers"
import "./assets/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
    <Providers>
      <App />
    </Providers>
  
);
