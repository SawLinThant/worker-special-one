import { FaChevronDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-screen h-28 fixed  border-b border-gray-800 shadow bg-gray-700 text-white">
      <div className="w-full h-full py-4 px-6 z-10 grid grid-cols-2">
        <div className="w-full h-ful flex flex-row items-center text-left">
          <h1 className="font-bold text-2xl">Worker Special One</h1>
        </div>
        <div className="lg:flex flex-row items-center justify-between md:hidden">
          <div className="w-3/4 grid grid-cols-4">
            <div className="relative group">
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="font-semibold">Home</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-30 h-[30vh] border border-gray-400 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <p className="text-center">This is dropdown content home</p>
              </div>
            </div>
            <div className="relative group">
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="font-semibold">Services</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-30 h-[30vh] border border-gray-400 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <p className="text-center">This is dropdown content service</p>
              </div>
            </div>
            <div className="relative group">
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="font-semibold">About Us</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-30 h-[30vh] border border-gray-400 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <p className="text-center">This is dropdown about us</p>
              </div>
            </div>
            <div className="relative group">
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="font-semibold">Contact Us</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-30 h-[30vh] border border-gray-400 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <p className="text-center">
                  This is dropdown content contact us
                </p>
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center">
            <button className="py-2 px-4 bg-gray-500 border border-gray-100 rounded-full text-white">
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:hidden md:flex flex-row items-center justify-end">
            <button><IoReorderThree size={25}/></button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
