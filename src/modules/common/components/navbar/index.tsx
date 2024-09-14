import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";

type NavbarProps = {
  scrollToSection: (section:string) => void
  toggleMobileNav: () => void
}

const Navbar = ({ scrollToSection,toggleMobileNav }: NavbarProps) => {
  return (
    <div className="w-screen h-28 px-6 fixed z-20 border-b border-gray-800 shadow bg-theme text-white">
      <div className="w-full h-full px-6 grid grid-cols-2">
        <div className="w-full h-full flex flex-row items-center gap-4 text-left">
          <div
            onClick={() => scrollToSection("home")}
            className="w-20 h-20 hover:cursor-pointer border border-white rounded-full flex flex-col items-center justify-center"
          >
            <h2 className="font-extrabold text-3xl text-green-600">W</h2>
          </div>
        </div>
        <div className="lg:flex flex-row items-center justify-between hidden md:hidden">
          <div className="w-3/4 grid grid-cols-4">
            <div className="w-full h-28 relative group">
              <div
                onClick={() => scrollToSection("home")}
                className="w-full h-full flex flex-row items-center justify-center gap-2 cursor-pointer"
              >
                <p className="font-semibold">Home</p>
                <FaChevronDown
                  size={15}
                  className="group-hover:rotate-180 transition-all duration-300"
                />
              </div>
            </div>
            <div className="w-full h-28 relative group">
              <div
                onClick={() => scrollToSection("service")}
                className="w-full h-full flex flex-row items-center justify-center gap-2 cursor-pointer"
              >
                <p className="font-semibold">Services</p>
                <FaChevronDown
                  size={15}
                  className="group-hover:rotate-180 transition-all duration-300"
                />
              </div>
            </div>
            <div className="relative group w-full h-28">
              <div
                onClick={() => scrollToSection("aboutus")}
                className="w-full h-full flex flex-row items-center justify-center gap-2 cursor-pointer"
              >
                <p className="font-semibold">About Us</p>
                <FaChevronDown
                  size={15}
                  className="group-hover:rotate-180 transition-all duration-300"
                />
              </div>
            </div>
            <div className="relative group w-full h-28">
              <div
                onClick={() => scrollToSection("contact-us")}
                className="w-full h-full flex flex-row items-center justify-center gap-2 cursor-pointer"
              >
                <p className="font-semibold">Contact Us</p>
                <FaChevronDown
                  size={15}
                  className="group-hover:rotate-180 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center">
            <button
              onClick={() => scrollToSection("contact-us")}
              className="py-2 px-4 bg-gray-600 border border-gray-100 rounded-full text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:hidden md:flex flex-row items-center flex justify-end">
          <button onClick={() => toggleMobileNav()}>
            <IoReorderThree size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
