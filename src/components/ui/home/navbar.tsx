import Image from "next/image";
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-1 h-22 flex flex-col justify-center  bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3  h-20 w-60 relative">
            <Image
              src="/Anan.png"
              alt="Community Background"
              className="object-cover object-center"
              fill
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/v1/home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/v2/category"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Categories
            </Link>
            <Link
              href="/v1/services-page"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/v1/about-us"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/v1/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/v1/sign-up"
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button + Login */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/v1/sign-up"
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
