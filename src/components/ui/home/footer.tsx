import { Mail} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Anantya</h3>
            <p className="mb-4">
              Your trusted partner for premium tech imports.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/anantya_overseas/" className="text-gray-400 hover:text-white">
                {/* Instagram */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/anantya-overseas/" className="text-gray-400 hover:text-white">
                {/* LinkedIn */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.937v5.668h-3.24V9h3.111v1.561h.045c.433-.82 1.494-1.683 3.075-1.683 3.29 0 3.896 2.165 3.896 4.981v6.593zM5.337 7.433a1.878 1.878 0 110-3.756 1.878 1.878 0 010 3.756zM6.776 20.452H3.894V9h2.882v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/v1/home" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/v1/about-us" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/v2/category" className="hover:text-blue-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/v1/services-page" className="hover:text-blue-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/v1/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/v1/services-page" className="hover:text-blue-300">
                  Supplier Verification
                </Link>
              </li>
              <li>
                <Link href="/v1/services-page" className="hover:text-blue-300">
                  Product Sourcing
                </Link>
              </li>
              <li>
                <Link href="/v1/services-page" className="hover:text-blue-300">
                  Quality Inspection
                </Link>
              </li>
              <li>
                <Link href="/v1/services-page" className="hover:text-blue-300">
                  Logistics Management
                </Link>
              </li>
              <li>
                <Link href="/v1/services-page" className="hover:text-blue-300">
                  Market Research
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span>anantyaoverseas@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Anantya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
