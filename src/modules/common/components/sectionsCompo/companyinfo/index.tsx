import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";

const CompanyInfo = () => {
  const INFO = [
    {
      id: "1",
      title: "Founded Since",
      img: "images/company/foundation.jpg",
      description:
        "Our company was founded in 2023, continuing the legacy of Mr. Zaw Zaw Cho and Mrs. Khin Thidar Aung, who were the former owners and managing directors of Shar Lei Cho Company Limited.",
    },
    {
      id: "2",
      title: "Staff",
      img: "images/company/staff.jpg",
      description:
        "Our staff includes highly experienced professionals who have extensive expertise in the overseas employment industry, particularly from their time at Shar Lei Cho Company Limited. The team is committed to providing efficient and effective services to both customers and partners.",
    },
    {
      id: "3",
      title: "Our Partners",
      img: "images/company/partner.jpg",
      description:
        "Our company has established partnerships primarily across Malaysia, with future plans to expand its collaboration to other countries, ensuring top-tier service delivery to all partners.",
    },
  ];

  // const PARTNERS = [
  //   {
  //     id: "1",
  //     country: "Malaysia",
  //     company: "Windbond Management & ConsultancySDN. BHD.",
  //   },
  //   {
  //     id: "2",
  //     country: "Malaysia",
  //     company: " Agensi Pekerjaan Great Resources SDN.BHD.",
  //   },
  //   {
  //     id: "3",
  //     country: "Malaysia",
  //     company: "Agensi PekerjaanXimile SDN. BHD.",
  //   },
  //   {
  //     id: "4",
  //     country: "Malaysia",
  //     company: "LG Top Management Services.",
  //   },
  //   {
  //     id: "5",
  //     country: "Malaysia",
  //     company: "Agensi Pekerjaan ISR Global SDN. BHD.",
  //   },
  //   {
  //     id: "6",
  //     country: "Malaysia",
  //     company: "Narida Resources SDN. BHD.",
  //   },
  //   {
  //     id: "7",
  //     country: "Malaysia",
  //     company: "Construction Labour Exchange Center.",
  //   },
  // ];

  const SERVICES = [
    {
      id: 1,
      service_name: "Recruitment of Myanmar workers",
    },
    {
      id: 2,
      service_name: " Passport registration",
    },
    {
      id: 3,
      service_name: "Arranging complete medical examination",
    },
    {
      id: 4,
      service_name: "Worker per-departure training",
    },
    {
      id: 5,
      service_name: "Personalized service for each client and partner",
    },
    {
      id: 6,
      service_name: "Provide booking for air tickets",
    },
    {
      id: 7,
      service_name:
        "Provide extensive explanation to the workers on their individual job scope",
    },
    {
      id: 8,
      service_name:
        "Provide personalized service for employer's reentry workers with special price.",
    },
    {
      id: 9,
      service_name:
        "Provide services for foreign visitors to get stay permit in Myanmar.",
    },
    {
      id: 10,
      service_name: "Provide Hotel bookings for foreign visits.",
    },
    {
      id: 11,
      service_name:
        "Help foreign visitors to also extend their stay in Myanmar.",
    },
    {
      id: 12,
      service_name: "Provide a Japanese language center for workers.",
    },
  ];
  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: false,

  });
  return (
    <div className="w-full h-full py-8 lg:py-8 lg:px-12 px-4 flex flex-col lg:gap-6 md:gap-6 gap-6">
      <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-8 gap-12">
        {INFO.map((info, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });
          return (
            <div
              key={info.id}
              className="w-full min-h-[30rem] flex items-center justify-center"
            >
              <div className="w-full h-full p-6 border bg-gray-100 border-gray-800 flex flex-col items-center rounded-lg">
                <div
                  ref={ref}
                  className={clsx(
                    "w-3/4 min-h-[4rem] text-white bg-primary flex items-center justify-center border border-gray-400 rounded-md transition-all duration-700",
                    {
                      "lg:duration-200": index === 0,
                      "lg:duration-500": index === 1,
                      "lg:duration-1000": index === 2,
                      "opacity-0 translate-y-[0rem]": !inView,
                      "opacity-100 translate-y-[-3rem]": inView,
                    }
                  )}
                >
                  <h2>{info.title}</h2>
                </div>
                <div className="w-full h-[18rem]">
                  <img
                    className="max-w-full rounded-lg max-h-full object-cover"
                    src={info.img}
                    alt=""
                  />
                </div>
                <div className="w-full h-full mt-6">
                  <p className="text-justify">{info.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        ref={partnersRef}
        className={` ${
          partnersInView
            ? "opacity-100 "
            : "opacity-0  "
        }transition-opacity duration-900 delay-600 ease-in-out w-full min-h-[20rem] text-white border border-gray-600 bg-primary p-8 flex flex-col gap-4`}
      >
        {/* <div>
          <h2 className="text-3xl font-semibold ">Our Partners</h2>
        </div>
        <div className="text-xl">
          <h3>Malaysia</h3>
        </div>
        <div className="w-full h-full flex flex-wrap justify-start gap-4">
          {PARTNERS.map((partner) => (
            <p
              className="px-4 md:border-r lg:border-r border-white"
              key={partner.id}
            >
              {partner.company}
            </p>
          ))}
        </div> */}
        <div id="service" className="mt-4">
          <h2 className="text-3xl font-semibold ">Our Services</h2>
        </div>
        <div className="w-full h-full flex flex-wrap justify-start gap-4">
          {SERVICES.map((service) => (
            <p
              className="px-4 md:border-r lg:border-r border-white"
              key={service.id}
            >
              {service.service_name}
            </p>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-white">
            Our Recruitment Procedures
          </h2>
        </div>
        <ul className="list-decimal ml-8 space-y-4">
          <li> Collecting information of required specification of workers.</li>
          <li>Recruiting qualified workers.</li>
          <li>Detail explanation of job description to workers.</li>
          <li>Providing necessary documents needed for departure.</li>
        </ul>
      </div>
    </div>
  );
};
export default CompanyInfo;
