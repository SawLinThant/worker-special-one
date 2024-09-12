import Navbar from "@/modules/common/components/navbar";
import { LayoutwithChildren } from "@/types/utils";
import { Children } from "react";

const Layout: LayoutwithChildren = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
        <Navbar/>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
