import Layout from "@/modules/layout/template";
import { NextPageWithLayout } from "@/types/global";
import { ReactElement } from "react";

const Home:NextPageWithLayout = () => {
   return(
    <div className="text-red-500">This is Home</div>
   )
}

Home.getLayout = (page:ReactElement) => {
    return <Layout>{page}</Layout>
}

export default Home