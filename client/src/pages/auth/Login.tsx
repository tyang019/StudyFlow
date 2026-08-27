import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getApiErrorMessage, login as loginUser } from "../../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setIsSubmitting(true);

    try {
      const data = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(getApiErrorMessage(error, "Unable to sign in. Check your credentials and API URL."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50">
      <div className="w-80 space-y-3 rounded-lg border bg-white p-6">
        <h1 className="text-center text-lg font-semibold">Login</h1>

        {error && (
          <div className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <input
          className="w-full rounded border p-2 text-sm"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded border p-2 text-sm"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              void handleLogin();
            }
          }}
        />

        <button
          onClick={() => void handleLogin()}
          disabled={isSubmitting}
          className="w-full rounded bg-black p-2 text-sm text-white disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
        <p className="text-center text-xs text-zinc-500">
          Need an account? {" "}
          <Link className="text-black underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}