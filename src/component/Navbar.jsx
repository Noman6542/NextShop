"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // for active link detection

  const handleLogout = () => {
    logout();
    toast.success("Logged out! See you soon!");
    setDropdownOpen(false);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Item-List", href: "/item-list" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          NextShop
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded ${
                pathname === link.href
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-gray-200"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/login" className="btn btn-primary">
                Login
              </Link>
              <Link href="/register" className="btn btn-secondary">
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
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <hr className="my-2" />
                  <Link
                    href="/add-product"
                    className="block bg-blue-500 text-white py-1 rounded text-center mb-1"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block bg-gray-500 text-white py-1 rounded text-center mb-1"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={handleLogout}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded mb-1 ${
                pathname === link.href
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {!user ? (
            <>
              <Link
                href="/login"
                className="block px-3 py-2 rounded bg-blue-500 text-white mb-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 rounded bg-gray-500 text-white mb-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/add-product"
                className="block px-3 py-2 rounded bg-blue-500 text-white mb-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Add Product
              </Link>
              <Link
                href="/manage-products"
                className="block px-3 py-2 rounded bg-gray-500 text-white mb-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manage Products
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full bg-red-500 text-white py-2 rounded"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
