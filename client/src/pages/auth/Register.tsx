import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50">
      <div className="w-80 space-y-3 rounded-lg border bg-white p-6">
        <h1 className="text-center text-lg font-semibold">Create account</h1>

        <input
          className="w-full rounded border p-2 text-sm"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded border p-2 text-sm"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => void handleRegister()}
          className="w-full cursor-pointer rounded bg-black p-2 text-sm text-white transition hover:bg-blue-600"
        >
          Register
        </button>
        <p>
          Already have an account? {" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}