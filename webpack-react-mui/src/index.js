import React from "react";
import { createRoot } from "react-dom/client";
import Login from "./login";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Login />);