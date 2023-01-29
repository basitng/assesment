import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MediaProvider from "./context/mediaProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MediaProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MediaProvider>
  </React.StrictMode>
);
