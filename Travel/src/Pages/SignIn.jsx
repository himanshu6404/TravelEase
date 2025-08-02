import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // <-- Add this import at the top

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://travelease-m121.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          alert("User not registered. Please sign up first!");
          navigate("/register");
        } else {
          const errorData = await response.json().catch(() => null);
          alert(errorData?.message || "Login failed. Please check your credentials.");
        }
        return;
      }

      const data = await response.json();
      alert("Login successful!");
      localStorage.setItem("token", data.data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error during login:", err);
      alert("Something went wrong during login!");
    }
  };

  return (
    <div className="min-h-screen bg-[#161B22] flex items-center justify-center px-4 py-12 relative">
      
      {/* TOP LEFT LOGO like Hero */}
      <div className="absolute top-6 left-6">
        <a href="/" className="text-2xl font-bold text-white">
          TravelEase
        </a>
      </div>

      {/* Centered login box */}
      <div className="w-full max-w-md bg-[#1f2937] rounded-2xl shadow-xl p-8 mt-12 sm:mt-0">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign in to your account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
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
  <div className="relative mt-1">
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
              disabled={loading}
              className={`w-full rounded-md px-4 py-2 font-semibold text-white shadow-md transition duration-300 ${
                loading ? "bg-pink-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-500 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
