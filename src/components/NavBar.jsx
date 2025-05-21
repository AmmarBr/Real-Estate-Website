import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    handleScroll();
  }, [isMenuOpen]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="text-lg font-bold flex justify-between items-center text-white py-4 px-8 md:px-20 lg:px-32 mx-auto">
        <img src={assets.logo} alt="Logo" className="h-8" />
        <ul className="hidden md:flex items-center">
          <li className="mx-4">
            <a href="#Header" className="hover:text-gray-400 cursor-pointer">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="#About" className="hover:text-gray-400 cursor-pointer">
              About
            </a>
          </li>
          <li className="mx-4">
            <a href="#Projects" className="hover:text-gray-400 cursor-pointer">
              Projects
            </a>
          </li>
          <li className="mx-4">
            <a href="#Testimonials" className="hover:text-gray-400 cursor-pointer">
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden md:block text-sm py-2 px-8 rounded-full cursor-pointer bg-white text-gray-400 hover:bg-gray-200 hover:text-gray-700 transition duration-300">
          Get Started
        </button>
        {/* Mobile menu icon */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="md:hidden cursor-pointer w-7"
          onClick={handleMenuToggle}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-100 z-10  animate__animated animate__backInRight transition-all duration-1000">
          <div className="flex justify-end p-4 absolute top-4 right-4">
            <button
              className="text-white text-lg font-semibold flex justify-center items-center w-full"
              onClick={handleCloseMenu}
            >
              <IoClose className="text-white w-8 h-8" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="text-white text-lg font-semibold my-4">
              <a href="#Header" className="hover:text-gray-400 cursor-pointer" onClick={handleCloseMenu}>
                Home
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a href="#About" className="hover:text-gray-400 cursor-pointer" onClick={handleCloseMenu}>
                About
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a href="#Projects" className="hover:text-gray-400 cursor-pointer" onClick={handleCloseMenu}>
                Projects
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a href="#Testimonials" className="hover:text-gray-400 cursor-pointer" onClick={handleCloseMenu}>
                Testimonials
              </a>
            </li>
            <li className="text-white text-lg font-semibold my-4">
              <a href="#Contact" className="hover:text-gray-400 cursor-pointer" onClick={handleCloseMenu}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
