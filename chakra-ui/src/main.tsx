import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.blue,
      secondary: baseTheme.colors.orange,
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
