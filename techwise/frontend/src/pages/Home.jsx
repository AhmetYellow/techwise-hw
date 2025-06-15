import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>📖 Welcome to the MentorTracker</h1>
      <p>Track your Quran and book reading progress with ease.</p>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/register"><button>Register</button></Link>
        <Link to="/login" style={{ marginLeft: "1rem" }}><button>Login</button></Link>
      </div>
    </div>
  );
}