import ReactDOM from "react-dom/client";
import App from "@src/App";
import { BrowserRouter } from "react-router-dom"; 

import "./assets/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
