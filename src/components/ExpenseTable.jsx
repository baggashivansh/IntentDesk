import { useExpense } from "../context/ExpenseContext"

export default function ExpenseTable() {
  const { expenses } = useExpense()

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
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        <ul style={{ paddingLeft: 18 }}>
          {expenses.map((e, i) => (
            <li
              key={i}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee"
              }}
            >
              <strong>{e.category}</strong> ₹{e.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
