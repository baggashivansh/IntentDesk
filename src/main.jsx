import React from "react"
import { ExpenseProvider } from "./context/ExpenseContext"
import ReactDOM from "react-dom/client"
import App from "./App"
import { TamboProvider } from "@tambo-ai/react"
import { components } from "./lib/tambo"
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpenseProvider>
      <TamboProvider
        apiKey={import.meta.env.VITE_TAMBO_API_KEY}
        components={components}
      >
        <App />
      </TamboProvider>
    </ExpenseProvider>
  </React.StrictMode>
)
