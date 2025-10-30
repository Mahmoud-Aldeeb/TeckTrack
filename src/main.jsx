import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import Nav from './componants/layout/Nav.jsx'
import Footer from './componants/layout/Footer.jsx'
import { BrowserRouter } from 'react-router-dom';
import "./utils/i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <Nav/>
          <App />
        <Footer />
      </BrowserRouter>
  </StrictMode>
);
