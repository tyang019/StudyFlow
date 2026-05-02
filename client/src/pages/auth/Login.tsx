import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-50">
      <div className="w-80 bg-white border p-6 rounded-lg space-y-3">
        <h1 className="font-semibold text-lg">Login</h1>

        <input
          className="w-full border p-2 rounded text-sm"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded text-sm"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-black text-white p-2 rounded text-sm"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}