import React from "react";
import { Cobe } from "../../globe3D";
import { FaHandshake } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const PARTNERS = [
    {
      id: "1",
      country: "Malaysia",
      company: "Windbond Management & ConsultancySDN. BHD.",
    },
    {
      id: "2",
      country: "Malaysia",
      company: " Agensi Pekerjaan Great Resources SDN.BHD.",
    },
    {
      id: "3",
      country: "Malaysia",
      company: "Agensi PekerjaanXimile SDN. BHD.",
    },
    {
      id: "4",
      country: "Malaysia",
      company: "LG Top Management Services.",
    },
    {
      id: "5",
      country: "Malaysia",
      company: "Agensi Pekerjaan ISR Global SDN. BHD.",
    },
    {
      id: "6",
      country: "Malaysia",
      company: "Narida Resources SDN. BHD.",
    },
    {
      id: "7",
      country: "Malaysia",
      company: "Construction Labour Exchange Center.",
    },
  ];

  const { ref: PartnersRightRef, inView: PartnersRightInView } = useInView({
    triggerOnce: false,
  });
  return (
    <div id="partners">
      <h1 className=" text-primary  text-4xl  font-extrabold text-center mb-10">
        Our Partners
      </h1>
      <div className=" xl:flex items-center  justify-center flex-1">
        <Cobe />

        <div
          ref={PartnersRightRef}
          className={`${
            PartnersRightInView
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          } transition-all delay-200 duration-500 ease-in-out shadow-xl bg-primary rounded-2xl`}
        >
          <div className=" m-20 flex-1 items-center justify-start">
            <div className="text-3xl text-left my-6 leading-loose  text-white font-bold ">
              <h3>Malaysia</h3>
            </div>
            <div className="w-full h-full flex-col justify-start gap-4">
              {PARTNERS.map((partner) => (
                <div
                  className=" flex items-center py-3 text-left text-white"
                  key={partner.id}
                >
                  <span className="pe-2">
                    <FaHandshake />
                  </span>
                  {partner.company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
