import { FaChevronDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-screen h-28 fixed  border-b border-gray-800 shadow bg-theme text-white">
      <div className="w-full h-full px-6 z-20 grid grid-cols-2">
        <div className="w-full h-ful flex flex-row items-center text-left">
          <h1 className="font-bold text-2xl">Worker Special One</h1>
        </div>
        <div className="lg:flex flex-row items-center justify-between md:hidden">
          <div className="w-3/4 grid grid-cols-4">
            <div className="w-full h-28 relative group ">
              <div className="w-full h-full flex flex-row items-center justify-center gap-2">
                <p className="font-semibold">Home</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen h-[30vh] border-2 border-gray-800 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <div className="p-2 w-full h-full">
                    <div className="w-full h-full bg-gray-100"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-28 relative group ">
              <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
                <p className="font-semibold">Services</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-10 h-[30vh] border-2 border-gray-800 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <div className="p-2 w-full h-full">
                    <div className="w-full h-full bg-gray-100 grid grid-cols-6">
                        <div className="bg-gray-500 col-span-2 flex items-center justify-center">
                            <h1 className="text-white font-bold text-2xl">Choose Our Services</h1>
                        </div>
                        <div className="col-span-4"></div>
                    </div>
                </div>
              </div>
            </div>
            <div className="relative group w-full h-28">
              <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
                <p className="font-semibold">About Us</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-30 h-[30vh] border-2 border-gray-800 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <div className="p-2 w-full h-full">
                    <div className="w-full h-full bg-gray-100"></div>
                </div>
              </div>
            </div>
            <div className="relative group w-full h-28">
              <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
                <p className="font-semibold">Contact Us</p>
                <div className="group-hover:rotate-180 transition-all duration-300">
                  <FaChevronDown size={15} />
                </div>{" "}
              </div>
              <div className="fixed top-[7rem] left-0 w-screen z-30 h-[30vh] border-2 border-gray-800 hidden group-hover:block opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white">
                <div className="p-2 w-full h-full">
                    <div className="w-full h-full bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center">
            <button className="py-2 px-4 bg-gray-600 border border-gray-100 rounded-full text-white">
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
