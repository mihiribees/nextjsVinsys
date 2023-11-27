import Image from "next/image";
import styles from "./page.module.css";
// import "./main.scss"
import HomeHeader from "./components/header/HomeHeader";
import { getRequest } from "@/lib/apicall";
import Banner from "./components/banner/Banner";
import { Suspense } from "react";
import ServiceSection from "./components/ServiceSec";
import Partners, { Clients } from "./components/partners/PartnerClient";
import WhatsNewSec from "./components/WhatsNew";

export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getRequest("get_home_page_details");

  const previousImages = (await parent).openGraph?.images || [];


  let title =  metadata.title;
  let description = metadata?.seo?.meta_description ? metadata.seo.meta_description : metadata.title;
  let ogImage = metadata?.seo?.og_image ? metadata.seo.og_image : "https://www.vinsys.com/images/logo.png";

  return {
    description,
    title,
    openGraph: {
      images: [`${ogImage}`, ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@vinsys',
      images: [`${ogImage}`, ...previousImages],
    },
  };
}

export default async function Home() {
  const headerdata = await getRequest("get_home_page_details");

  return (
    <>
      <HomeHeader />
      <Banner homeBanerData={headerdata} />
      <ServiceSection />
      <Partners />
      {
        headerdata.what_new_section && <>
          <WhatsNewSec data={headerdata.what_new_section} />
        </>
      }
      <Clients />

    </>
  );
}
