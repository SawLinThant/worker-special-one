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
  return (
    <div className="flex flex-col gap-16">
      <div className="w-full h-full grid lg:grid-cols-10 md:grid-cols-1 gap-4">
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
      <div className="w-full h-full">
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <div className="w-full lg:h-[50vh] md:h-[30vh] rounded-lg overflow-hidden">
            <img className="w-full h-full" src="images/vission.jpg" alt="" />
          </div>
          <div className="w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 bg-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold">Our Vission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quibusdam ipsa corrupti excepturi voluptate eaque eveniet odit,
              distinctio est voluptatem! Tempore cum asperiores maiores neque
              quae, illo amet quis quasi!
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="w-full h-full grid grid-cols-2 rounded-lg overflow-hidden">
            <div className="w-full h-full flex flex-col gap-8 p-7">
                <h1 className="w-full text-center text-2xl font-bold">About Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ea dolorum, vero consequatur, laudantium mollitia quod ex possimus error ratione deserunt odit et omnis iusto placeat velit saepe. Voluptatem, reprehenderit?</p>
            </div>
            <div className="w-full lg:min-h-[40vh] grid grid-cols-2 p-4 gap-4">
                <div className="w-full h-full">
                    <img className="max-w-full max-h-full object-cover rounded-lg" src="images/img1.jpg" alt="" />
                </div>
                <div className="w-full h-full">
                    <img className="max-w-full max-h-full object-cover rounded-lg" src="images/img2.jpg" alt="" />
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
