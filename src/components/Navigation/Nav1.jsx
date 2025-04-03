import { Bell, Heart, ShoppingCart, Search, Menu } from "lucide-react";
import logo from "./logo.png"; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo" id='logoImg' className="h-10 w-auto" />
          
          <button className="hidden md:flex items-center gap-2 px-4 py-2">
            <Menu size={20} />
            <span>Category</span>
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border pl-10 pr-4 py-2"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Bell className="cursor-pointer text-gray-600 hover:text-blue-600" size={24} />
          <Heart className="cursor-pointer text-gray-600 hover:text-red-500" size={24} />
          <ShoppingCart className="cursor-pointer text-gray-600 hover:text-green-500" size={24} />

          <button className="btn2">Create Account</button>
          <button className="btn1">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
