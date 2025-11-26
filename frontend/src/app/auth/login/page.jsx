"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const users = [
    { email: "admin@cms.com", password: "123456", role: "admin" },
    { email: "volunteer@cms.com", password: "123456", role: "volunteer" },
    { email: "donor@cms.com", password: "123456", role: "donor" },
    { email: "user@cms.com", password: "123456", role: "user" },
  ];

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (matchedUser) {
      localStorage.setItem("user", JSON.stringify(matchedUser));
      toast.success(`Welcome ${matchedUser.role}! Redirecting...`);

      // Redirect after a small delay for smooth UX
      setTimeout(() => {
        router.push(`/dashboard/${matchedUser.role}`);
      }, 1000);
    } else {
      toast.error("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-blue-600 font-medium">
            Register
          </a>
        </p>

        <div className="mt-6 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
          <p className="font-semibold mb-2">Demo Accounts:</p>
          <ul className="space-y-1">
            <li>🧑‍💼 Admin → admin@cms.com / 123456</li>
            <li>🤝 Volunteer → volunteer@cms.com / 123456</li>
            <li>💰 Donor → donor@cms.com / 123456</li>
            <li>👤 User → user@cms.com / 123456</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
