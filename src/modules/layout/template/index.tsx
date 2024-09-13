import Footer from "@/modules/common/components/footer";
import Navbar from "@/modules/common/components/navbar";
import { LayoutwithChildren } from "@/types/utils";
import { Children } from "react";

const Layout: LayoutwithChildren = ({ children }) => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar scrollToSection={scrollToSection} />
      <div className="flex flex-col mt-28">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
