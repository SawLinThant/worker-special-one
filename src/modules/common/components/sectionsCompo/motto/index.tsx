import React from "react";
import { TiTick } from "react-icons/ti";

const Motto = () => {
  return (
    <div className="">
      <div className="w-full h-full">
        <h1 className=" text-primary  text-4xl  font-extrabold text-center mb-3">Our Motto</h1>
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          <div className="w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 bg-primary rounded-lg">
            <h2 className="text-2xl font-bold text-center text-white">
              Our Vision
            </h2>
            <p className="leading-loose text-xl text-white mx-8 my-2">
              To become one of the biggest and most successful overseas
              employment agencies in Myanmar with hard work and dedication.
            </p>
          </div>
          <div className="w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 bg-primary rounded-lg">
            <h2 className="text-2xl font-bold text-center text-white">
              Our Mission
            </h2>
            <p className=" leading-relaxed text-xl text-white mx-8 my-2">
              -To give 100% effort for our customers,clients,and partners. <br />
              -To provide efficient and effective service for our customers,clients
              and partners.
            </p>
          </div>
          <div className="w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 bg-primary rounded-lg">
            <h2 className="text-2xl font-bold text-center text-white">
              Our Core Values
            </h2>
            <p className=" text-xl text-white mx-8 my-2 leading-loose">
         <span>   <TiTick className=" inline text-3xl text-green-500 pb-1"/> Honesty <br /></span>
         <span>   <TiTick className=" inline text-3xl text-green-500 pb-1"/> Customer satisfaction <br /></span>
         <span>   <TiTick className=" inline text-3xl text-green-500 pb-1"/>   Efficiency <br /></span>
            
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
