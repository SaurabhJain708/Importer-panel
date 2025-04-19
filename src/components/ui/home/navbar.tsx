import { Ship } from "lucide-react";
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[2] bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-3 rounded-xl shadow-md">
              <Ship className="text-white" size={28} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Anantya Overseas
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Products", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <Link
              href="/login"
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button + Login */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline hidden sm:block"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
