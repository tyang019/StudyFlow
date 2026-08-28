import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getApiErrorMessage, login as loginUser } from "../../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <div className="h-screen flex items-center justify-center bg-zinc-50">
      <form onSubmit={(event) => void login(event)} className="w-80 bg-white border p-6 rounded-lg space-y-3">
        <h1 className="font-semibold text-lg flex items-center justify-center">Login</h1>

        {error && (
          <div className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <input
          aria-label="Email address"
          autoComplete="email"
          className="w-full border p-2 rounded text-sm"
          placeholder="Email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          aria-label="Password"
          autoComplete="current-password"
          className="w-full border p-2 rounded text-sm"
          minLength={6}
          placeholder="Password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
         type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white p-2 rounded text-sm disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
         <p className="text-center text-xs text-zinc-500">
          Need an account? <Link className="text-black underline" to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}