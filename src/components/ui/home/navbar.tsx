import { Menu, Ship } from "lucide-react";

export default function HomeNavbar(){
    return(
        <header className="fixed top-0 left-0 right-0 z-5000 bg-white shadow-sm py-4">
                <div className="container mx-auto px-4 md:px-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <Ship className="text-white" size={28} />
                      </div>
                      <h1 className="text-3xl font-bold text-gray-800">
                        Anantya Overseas
                      </h1>
                    </div>
        
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        Products
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        Services
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        About
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        Contact
                      </a>
                    </nav>
        
                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Menu size={28} />
                    </button>
                  </div>
                </div>
              </header>
    )
}