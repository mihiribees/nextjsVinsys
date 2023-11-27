import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "./components/footer/Footer";
import Script from "next/script";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinsys",
  description:
    "Our services include IT Training & Certification courses, Software Development, Consulting, Digital Learning, Foreign Language Services and Customized Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"
          as="style"
        />
      </Head>
      <body className={inter.className}>

        
          {children}
        <Footer />
       

        {/* Script Adding Method 1 */}
        {/* <Script
          src="https://www.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js"
          strategy="lazyOnload"
          type="text/javascript"
          data-bot="277331826"

        /> */}

        {/* Script Adding Method 2 */}
        {/* <script dangerouslySetInnerHTML={{
          __html: script
        }} >
        </script> */}
      </body>
    </html>
  );
}
