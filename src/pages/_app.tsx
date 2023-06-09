import { Fragment } from "react";
import Providers from "../components/Providers";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <Providers>
      {getLayout(
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Providers>
  );
}

export default MyApp;
