"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../Context/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const { Login, GoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await Login(email, password);
      const user = result.user;

      toast.success(`Login Successfully, ${user.email}`);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleWithGoogle = async () => {
    try {
      const result = await GoogleLogin();
      const user = result.user;

      toast.success(`Login Successfully, ${user.displayName || user.email}`);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-r from-blue-50 to-white flex items-center justify-center px-4">
      {/* Login Card */}
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden max-w-md w-full p-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Welcome Back to NextShop
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Login to access your account, manage products, and explore our shop.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input w-full rounded-lg shadow-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition p-3"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              required
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input w-full rounded-lg shadow-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition p-3"
            />
            <label className="label">
              <Link href="#" className="link link-hover text-sm">
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 p-3 bg-cyan-50 rounded-2xl font-bold cursor-pointer"
          >
            Login
          </button>
          {error && <p className="text-red-400">{error}</p>}

          {/* Or divider */}
          <div className="flex items-center gap-4 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google login button */}
          <button
            onClick={handleWithGoogle}
            type="button"
            className="btn btn-outline btn-accent w-full flex items-center justify-center gap-3 bg-blue-50 p-5 font-bold cursor-pointer"
          >
            <FaGoogle />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link href="/Register" className="link link-primary">
            <span className="text-red-700 font-bold cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
