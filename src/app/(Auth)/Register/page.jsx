"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthProvider";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
    const { GoogleLogin ,createUser} = useContext(AuthContext);
    const [error, setError] = useState("");
  
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("User created:", result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Firebase Error:", error.message);
      });
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
    <div className="min-h-screen bg-gradient- from-blue-50 to-white flex items-center justify-center px-4">
      {/* Register Card */}
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden max-w-md w-full p-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Join NextShop today and start managing & exploring awesome products!
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your full name"
              className="input w-full rounded-lg shadow-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition p-3"
            />
          </div>

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
          {/* Photo  */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full rounded-lg shadow-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition p-3"
              placeholder="Photo URL"
              required
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
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 p-3 bg-cyan-50 rounded-2xl font-bold cursor-pointer"
          >
            Register
          </button>

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
          Already have an account?{" "}
          <Link href="/login" className="link link-primary">
            <span className="text-red-700 font-bold cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
