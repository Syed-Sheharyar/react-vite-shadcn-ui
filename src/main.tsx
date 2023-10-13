import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "@/styles/global.css"
import { ThemeProvider } from "@/components/theme-provider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
