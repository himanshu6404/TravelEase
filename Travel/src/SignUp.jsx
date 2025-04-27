import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Assuming you're using the same styles
import { GoogleSignIn } from "./GoogleSignIn.jsx"; // Import your GoogleSignIn component

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      //VERY IMPORTANT: Check if the response is ok before parsing JSON
      if (!response.ok) {
        // don't try to parse json if response failed
        if (response.status === 401) {
          // alert("User not registered. Please sign up first!");
          // navigate("/register");
        } else {
          const errorData = await response.json().catch(() => null); // try-catch JSON parsing
          alert(errorData?.message || "Sign Up failed. Please check your credentials.");
        }
        return; // stop here
      }
  
      // now safe to parse JSON
      const data = await response.json();
      console.log("Response data:", data);
  
      alert("Sign Up successful!");
      localStorage.setItem("token", data.data.accessToken);
      navigate("/dashboard") ;
  
    } catch (err) {
      console.error("Error during login:", err);
      alert("Something went wrong during login!");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="logo">
  <a 
    href="/" 
    className="text-2xl font-bold text-gray-900"
  >TravelEase
  </a>
</div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-indigo-600">
          Sign Up to your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-black-600">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 font-medium"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-black-600">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <GoogleSignIn></GoogleSignIn>

      </div>
    </div>
  );
}

export default SignUp;
