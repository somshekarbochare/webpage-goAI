import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const initialTheme = (() => {
  const stored = localStorage.getItem("goai-theme");
  if (stored === "dark") return "dark";
  return "light";
})();

document.documentElement.classList.add(initialTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
