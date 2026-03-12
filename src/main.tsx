
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const heroShell = document.getElementById("hero-shell");
if (heroShell) heroShell.remove();

createRoot(document.getElementById("root")!).render(<App />);
  