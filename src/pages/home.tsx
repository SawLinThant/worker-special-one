import ContactUs from "@/modules/common/components/sectionsCompo/contactus";
import Motto from "@/modules/common/components/sectionsCompo/motto";
import OurServices from "@/modules/common/components/sectionsCompo/ourservices";
import Slider from "@/modules/common/components/slider";
import Layout from "@/modules/layout/template";
import { NextPageWithLayout } from "@/types/global";
import { ReactElement } from "react";
import { FaPhone } from "react-icons/fa6";
import { TbWorldShare } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const Home: NextPageWithLayout = () => {
  const IMAGE_URLS = [
    "images/banner/slide1.jpg",
    "images/banner/slide2.jpg",
    "images/banner/slide3.jpg",
  ];

  const ABOUT_US_CATALOUGE = [
    {
      id: "1",
      heading: "heading1",
      img_url: "",
      description: "",
    },
    {
      id: "1",
      heading: "heading2",
      img_url: "",
      description: "",
    },
  ];
  return (
    <div className="flex flex-col gap-16 py-10 px-14">
      <div
        id="home"
        className="w-full h-full grid lg:grid-cols-10 md:grid-cols-1 gap-4"
      >
        <div className="lg:col-span-4 md:w-full lg:h-full md:order-2 lg:order-1 md:min-h-[20vh] rounded-lg border-2 border-gray-800  p-7">
          <div className="w-full h-full p-6  flex flex-col rounded-lg bg-gray-200 gap-8">
            <h1 className="text-2xl font-bold">Worker special One</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias dicta ratione magni fugiat tempore nesciunt distinctio,
              commodi vel. Porro odit magnam odio sapiente alias temporibus
              repellendus natus molestias inventore dignissimos!
            </p>
            <button className="min-w-[20rem]"></button>
          </div>
        </div>
        <div className="lg:col-span-6 md:w-full lg:h-[70vh] md:order-1 lg:order-2 md:h-[40vh] border-2 border-gray-700 rounded-lg overflow-hidden">
          <Slider imageUrls={IMAGE_URLS} />
        </div>
      </div>
  <Motto/>
  <OurServices/>
  <ContactUs/>
      <div className="h-full w-full">
        <div className="w-full h-full grid grid-cols-2 rounded-lg overflow-hidden">
          <div className="w-full h-full flex flex-col gap-8 p-7">
            <h1 className="w-full text-center text-2xl font-extrabold">
              About Us
            </h1>
            <p className="text-justify">
              Founded in 2023, the newly formed company is the legacy of Mr. Zaw
              Zaw Cho and Mrs. Khin Thidar Aung, highly experienced formerly
              owners and managing directors of Shar Lei Cho Company Limited. We
              made the name as an oversea employment agency under the name of
              Shar Lei Cho Company Limited with various partners across
              Malaysia. We used to focus our services only on Malaysia to give
              most efficient and effective service for our customers but also
              have plans to partner with other countries too in the future. We
              strive to give the same top-level services for our customers and
              partners.
            </p>
          </div>
          <div className="w-full lg:min-h-[40vh] grid grid-cols-2 p-4 gap-4">
            <div className="w-full h-full">
              <img
                className="max-w-full max-h-full object-cover rounded-lg"
                src="images/img1.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full">
              <img
                className="max-w-full max-h-full object-cover rounded-lg"
                src="images/img2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1">
        <div className="w-full h-full grid lg:grid-cols-1 md:grid-cols-1 border border-gray-800 rounded-lg p-6">
          <div className="w-full h-full p-4 bg-blue-100">
            <div className="w-full min-h-[30rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
              <div className="w-full h-full flex flex-col gap-8 justify-center lg:pl-8">
                <div className="w-full flex flex-col gap-4">
                  <h1 className="flex flex-row items-center text-center font-extrabold text-red-600 text-4xl mt-4">
                    Ms. Khin Thidar Aung
                  </h1>
                  <p>
                    <span className="border-b-2 border-red-600 pb-2">
                      Manging
                    </span>{" "}
                    Director
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <FaPhone color="red" size={35} />
                  <div className="flex flex-col items-center">
                    <a href="">+95-9448011904</a>
                    <a href="">+95-9985055517</a>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <TbWorldShare color="red" size={35} />
                  <div className="flex flex-col items-center">
                    <p>Licnese Number - 182/2024</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <FaLocationDot color="red" size={35} />
                  <div className="flex flex-col items-center">
                    <p>No.22 Nay Kyar St, Yangon, Myanmar</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full" src="images/MD.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
