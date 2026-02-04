export default function HelpCard() {
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
      <h2>Welcome to IntentDesk</h2>
      <ul style={{ paddingLeft: 18, lineHeight: 1.6 }}>
        <li>Add an expense</li>
        <li>Show my expenses</li>
        <li>Summarize my spending</li>
      </ul>
    </div>
  )
}
