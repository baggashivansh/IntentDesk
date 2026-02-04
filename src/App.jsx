import { useState } from "react"
import LandingPage from "./LandingPage"
import AddExpenseCard from "./components/AddExpenseCard"
import ExpenseTable from "./components/ExpenseTable"
import SummaryCards from "./components/SummaryCards"
import HelpCard from "./components/HelpCard"

export default function App() {
  const [started, setStarted] = useState(false)

  if (!started) {
    return <LandingPage onStart={() => setStarted(true)} />
  }

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "system-ui, sans-serif",
        padding: 20
      }}
    >
      <HelpCard />
      <AddExpenseCard />
      <SummaryCards />
      <ExpenseTable />

      <p style={{ textAlign: "center", marginTop: 40, color: "#777" }}>
        Built by Shivansh Bagga
      </p>
    </div>
  )
}
