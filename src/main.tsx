import React from "react";
import ReactDOM from "react-dom/client";

//Third Party Packages
import { ChakraProvider } from "@chakra-ui/react";

//My Codes
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
