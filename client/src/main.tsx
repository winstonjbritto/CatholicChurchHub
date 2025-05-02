import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "CatholicConnect - Find Catholic Churches Near You";

createRoot(document.getElementById("root")!).render(<App />);
