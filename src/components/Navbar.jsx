import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          RealCPO
        </a>

        {/* Menu for large screens */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a href="#home" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-600">Features</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#home">Home</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#features">Features</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#about">About</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
