import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getApiErrorMessage,
  register as registerUser,
} from "../../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);
    setIsSubmitting(true);

    try {
      await registerUser({
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      setError(
        getApiErrorMessage(
          error,
          "Unable to create account. Please try again."
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50">
      <form
        onSubmit={(event) => void register(event)}
        className="w-80 space-y-3 rounded-lg border bg-white p-6"
      >
        <h1 className="text-center text-lg font-semibold">
          Create account
        </h1>

        {error && (
          <div className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <input
          aria-label="Email address"
          autoComplete="email"
          className="w-full rounded border p-2 text-sm"
          placeholder="Email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          aria-label="Password"
          autoComplete="new-password"
          className="w-full rounded border p-2 text-sm"
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
          className="w-full cursor-pointer rounded bg-black p-2 text-sm text-white transition hover:bg-blue-600 disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link className="text-black underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}