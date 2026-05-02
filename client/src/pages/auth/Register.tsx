import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-50">
      <div className="w-80 bg-white border p-6 rounded-lg space-y-3">
        <h1 className="font-semibold text-lg">Create account</h1>

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
          onClick={register}
          className="w-full bg-black text-white p-2 rounded text-sm"
        >
          Register
        </button>
      </div>
    </div>
  );
}