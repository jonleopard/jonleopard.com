import { Fragment } from "react";
import Providers from "../components/Providers";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <Providers>
        {getLayout(
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Providers>
    </>
  );
}

export default MyApp;
