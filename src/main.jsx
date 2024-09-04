import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NameProvider } from "./global/GlobalState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </StrictMode>
);
