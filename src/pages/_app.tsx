import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;