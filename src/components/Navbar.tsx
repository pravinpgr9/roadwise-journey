
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-traffic-blue text-white flex items-center justify-center mr-2">
                <span className="font-bold text-lg">RW</span>
              </div>
              <span className="font-bold text-xl text-traffic-dark">RoadWise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#rules" className="text-gray-700 hover:text-traffic-blue font-medium transition-colors">
              Rules & Regulations
            </a>
            <a href="#tips" className="text-gray-700 hover:text-traffic-blue font-medium transition-colors">
              Safety Tips
            </a>
            <a href="#kids" className="text-gray-700 hover:text-traffic-blue font-medium transition-colors">
              Kids Zone
            </a>
            <a href="#emergency" className="text-gray-700 hover:text-traffic-blue font-medium transition-colors">
              Emergency
            </a>
          </nav>

          {/* Search & Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <Search className="w-4 h-4 mr-2" />
              <span>Search</span>
            </Button>
            <Button className="bg-traffic-blue hover:bg-traffic-blue/90 text-white rounded-full">
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container px-4 py-4 space-y-3">
            <a href="#rules" className="block text-gray-700 hover:text-traffic-blue font-medium p-2">
              Rules & Regulations
            </a>
            <a href="#tips" className="block text-gray-700 hover:text-traffic-blue font-medium p-2">
              Safety Tips
            </a>
            <a href="#kids" className="block text-gray-700 hover:text-traffic-blue font-medium p-2">
              Kids Zone
            </a>
            <a href="#emergency" className="block text-gray-700 hover:text-traffic-blue font-medium p-2">
              Emergency
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="justify-center rounded-full">
                <Search className="w-4 h-4 mr-2" />
                <span>Search</span>
              </Button>
              <Button className="bg-traffic-blue hover:bg-traffic-blue/90 text-white justify-center rounded-full">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
