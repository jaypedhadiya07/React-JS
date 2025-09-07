import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

function Name() {
  return <h1>jay</h1>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Clike me to Visit GOOGLE",
// }; // Custom React Element

const reactElement1 = (
  <a href="https://google.com" target="_blank">
    Click me to Visit GOOGLE
  </a>
); // it's a working React Element

const name = "Jay";
const reactElement2 = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to Visit GOOGLE"
  // if (condition) {
  // } // not allowed in argument position
  // name // evaluate expression
); // React Element using React.createElement

createRoot(document.getElementById("root")).render(reactElement2);