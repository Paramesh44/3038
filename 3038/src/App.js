import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch API
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>My API + React Fetch</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
