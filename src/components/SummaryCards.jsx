import { useExpense } from "../context/ExpenseContext"

export default function SummaryCards() {
  const { expenses } = useExpense()

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        marginBottom: 20
      }}
    >
      <h2>Spending Summary</h2>
      <p>Total spent ₹{total}</p>
      <p>Number of expenses {expenses.length}</p>
    </div>
  )
}
