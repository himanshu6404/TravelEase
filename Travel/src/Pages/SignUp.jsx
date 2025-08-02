import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { GoogleSignIn } from "./GoogleSignIn.jsx";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://travelease-m121.onrender.com/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        alert(errorData?.message || "Sign Up failed. Please check your credentials.");
        return;
      }

      const data = await response.json();
      alert("Sign Up successful!");
      localStorage.setItem("token", data.data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error during signup:", err);
      alert("Something went wrong during signup!");
    }
  };

  return (
    <div className="min-h-screen bg-[#161B22] flex items-center justify-center px-4 py-12 relative">
      {/* Top-left logo like Hero */}
      <div className="absolute top-6 left-6">
        <a href="/" className="text-2xl font-bold text-white">
          TravelEase
        </a>
      </div>

      {/* Signup form container */}
      <div className="w-full max-w-md bg-[#1f2937] rounded-2xl shadow-xl p-8 mt-12 sm:mt-0">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign up to your account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-md bg-[#0d1117] px-3 py-2 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-pink-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-md bg-[#0d1117] px-3 py-2 pr-10 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-pink-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-white"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-pink-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-pink-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
