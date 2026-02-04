import { useState, useEffect, useRef } from "react"
import { useExpense } from "../context/ExpenseContext"

export default function AddExpenseCard({ amount, category, date, note }) {
  const { addExpense } = useExpense()
  const hasAdded = useRef(false)

  const [localAmount, setLocalAmount] = useState("")
  const [localCategory, setLocalCategory] = useState("")

  useEffect(() => {
    if (!hasAdded.current && amount && category) {
      addExpense({
        amount,
        category,
        date: date ? new Date(date) : new Date(),
        note
      })
      hasAdded.current = true
    }
  }, [amount, category, date, note, addExpense])

  const handleAdd = () => {
    if (!localAmount || !localCategory) return

    addExpense({
      amount: Number(localAmount),
      category: localCategory,
      date: new Date()
    })

    setLocalAmount("")
    setLocalCategory("")
  }

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
      <h2>Add Expense</h2>

      <input
        value={localAmount}
        onChange={e => setLocalAmount(e.target.value)}
        placeholder="Amount"
        style={{
          display: "block",
          marginBottom: 12,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ddd",
          width: "100%"
        }}
      />

      <input
        value={localCategory}
        onChange={e => setLocalCategory(e.target.value)}
        placeholder="Category"
        style={{
          display: "block",
          marginBottom: 12,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ddd",
          width: "100%"
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          padding: "10px 18px",
          borderRadius: 8,
          border: "none",
          background: "#111",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Add Expense
      </button>
    </div>
  )
}
