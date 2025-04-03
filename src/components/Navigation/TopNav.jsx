import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install Lucide icons for menu icons: npm install lucide-react

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-Gray/900 shadow-md" id="navTop">
      <div className="container mx-auto flex justify-between items-center py-1 px-1">
        
        {/* Left - Navigation Links */}
        <div className="hidden md:flex space-x-6 ">
          <a href="#" className="text-white hover:text-blue-600">Home</a>
          <a href="#" className="text-white hover:text-blue-600">Courses</a>
          <a href="#" className="text-white hover:text-blue-600">About</a>
          <a href="#" className="text-white hover:text-blue-600">Contact</a>
          <a href="#" className="text-white hover:text-blue-600">Become an Instructor</a>
        </div>

        {/* Right - Language Dropdown */}
        <div className="relative">
        <select className="border text-gray-300 border-gray-300 rounded-md focus:outline-none">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
          </select>  
          <select className="border text-gray-300 border-gray-300 rounded-md focus:outline-none">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <a href="#" className="block text-gray-700 py-2">Home</a>
          <a href="#" className="block text-gray-700 py-2">About</a>
          <a href="#" className="block text-gray-700 py-2">Services</a>
          <a href="#" className="block text-gray-700 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
