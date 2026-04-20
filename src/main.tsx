import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Clear any stale DOM nodes before mounting to prevent
// "removeChild" errors during HMR reconciliation
rootElement.innerHTML = "";

const root = createRoot(rootElement);
root.render(<App />);
