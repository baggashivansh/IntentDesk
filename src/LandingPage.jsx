export default function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <h1>Welcome to IntentDesk</h1>

      <p>
        Your intelligent workspace for tracking spending,
        understanding patterns, and keeping financial awareness simple.
      </p>

      <button onClick={onStart}>
        Get Started
      </button>

      <p className="footer">
        Built by Shivansh Bagga
      </p>
    </div>
  )
}
