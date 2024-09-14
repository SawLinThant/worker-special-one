import AboutUs from "@/modules/common/components/sectionsCompo/aboutus";
import CompanyInfo from "@/modules/common/components/sectionsCompo/companyinfo";
import ContactUs from "@/modules/common/components/sectionsCompo/contactus";
import Motto from "@/modules/common/components/sectionsCompo/motto";
import OurServices from "@/modules/common/components/sectionsCompo/ourservices";
import Slider from "@/modules/common/components/slider";
import Layout from "@/modules/layout/template";
import { NextPageWithLayout } from "@/types/global";
import { ReactElement } from "react";

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
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="w-full flex flex-col lg:gap-16 md:gap-16 gap-16 lg:py-10 lg:px-14 md:py-5 md:px-10 px-4 py-4">
        <div
          id="home"
          className="w-full h-full grid lg:grid-cols-10 md:grid-cols-1 grid-cols-1 gap-4"
        >
          <div className="lg:col-span-4 md:w-full lg:h-full md:order-2 lg:order-1 md:min-h-[20vh] rounded-lg border-2 border-gray-800  p-7">
            <div className="w-full h-full p-6  flex flex-col rounded-lg bg-gray-200 gap-8">
              <h1 className="text-2xl font-bold">Worker special One</h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias dicta ratione magni fugiat tempore nesciunt
                distinctio, commodi vel. Porro odit magnam odio sapiente alias
                temporibus repellendus natus molestias inventore dignissimos!
              </p>
              <button onClick={() => scrollToSection("aboutus")} className="max-w-[9rem] bg-theme text-white p-2 rounded-md border border-gray-500">
                View More
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 md:w-full lg:h-[70vh] md:order-1 lg:order-2 md:h-[40vh] border-2 border-gray-700 rounded-lg overflow-hidden">
            <Slider imageUrls={IMAGE_URLS} />
          </div>
        </div>
        <Motto />
        <OurServices />
        <ContactUs />
        <AboutUs />
      </div>
      <CompanyInfo/>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
