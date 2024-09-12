import Navbar from "@/modules/common/components/navbar";
import { LayoutwithChildren } from "@/types/utils";
import { Children } from "react";

const Layout: LayoutwithChildren = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <Navbar/>
      <div className="flex flex-col mt-28 py-10 px-14">{children}</div>
    </div>
  );
};
export default Layout;
