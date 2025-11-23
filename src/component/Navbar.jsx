"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLogout = () => {
    auth.signOut();
    toast.success("Logged out", "See you soon!", "success");
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="font-bold text-lg">NextShop</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/login" className="btn btn-primary hidden md:flex">
                Login
              </Link>

              <Link href="/Register" className="btn btn-secondary hidden md:flex">
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <Image
                src={user.photoURL || "/default.png"}
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-3">
                  {/* Logged-in user info */}
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>

                  <div className="my-2">
                    <hr />
                  </div>

                  {/* Add Product */}
                  <Link
                    href="add-product"
                    className="block bg-blue-500 text-white py-1 rounded text-center mb-1"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Add Product
                  </Link>

                  {/* Manage Products */}
                  <Link
                    href="manage-products"
                    className="block bg-gray-500 text-white py-1 rounded text-center mb-1"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Manage Products
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={logout}
                    className="mt-2 w-full bg-red-500 text-white py-1 rounded cursor-pointer"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
