import { getRequest } from '@/lib/apicall'
import React from 'react';
import HomeHeader from '../components/header/HomeHeader';
import InnerBanner from '../components/banner/InnerBanner';

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-term-conditions-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    // openGraph: {
    //   images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    // },
  }
}


const TermPage = async () => {


  const data = await getRequest(`get-term-conditions-page-details`);

  return (
    <>
      <HomeHeader />

      <InnerBanner image={data.banner != null ? data.banner.media : `/images/banner-Terms-Conditions.jpg`} />


      {/* <InnerBannerr image={termsandcondtiondata.banner != null ? termsandcondtiondata.banner.media : `${process.env.PUBLIC_URL}/images/banner-Terms-Conditions.jpg`} /> */}

      <section className="textual-pages common-spacing-top-bottom">
        <div className="inner-container">
          <div className="detail-wrapper" dangerouslySetInnerHTML={{ __html: data.content.content }} />
        </div>
      </section>
      {/* <h1>Term & Condition Page Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>Term & Condition Page End</h1> */}
    </>

  )
}

export default TermPage