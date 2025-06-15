import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [formData, setFormData] = useState({ quran: 0, book: 0 });

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleUpdate = async () => {
    const updatedUser = {
      ...user,
      quranPagesRead: user.quranPagesRead + formData.quran,
      bookPagesRead: user.bookPagesRead + formData.book,
    };

    const res = await fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser)
    });

    const result = await res.json();
    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null; // just in case before redirect happens

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Welcome, {user.name}!</h2>
      <p>📖 Quran Pages Read: {user.quranPagesRead}</p>
      <p>📚 Book Pages Read: {user.bookPagesRead}</p>

      <br />
      <input
        name="quran"
        placeholder="Add Quran pages"
        type="number"
        onChange={handleChange}
      />
      <input
        name="book"
        placeholder="Add book pages"
        type="number"
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
      <br /><br />
      <button onClick={handleUpdate}>Update</button>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
