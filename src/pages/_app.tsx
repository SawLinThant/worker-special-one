import "@/styles/globals.css";

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;