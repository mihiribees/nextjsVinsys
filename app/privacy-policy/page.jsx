import { getRequest } from "@/lib/apicall";
import HomeHeader from "../components/header/HomeHeader";
import InnerBanner from "../components/banner/InnerBanner";



export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-privacy-policy-page-details`);

  // 

  // 


  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata.seo!=null && metadata.seo.meta_title!=null ? metadata.seo.meta_title : metadata.title,
    title:metadata.seo!=null  && metadata.seo.meta_description!=null ? metadata.seo.meta_description : metadata.title,
    openGraph: {
      images: [`${metadata?.seo?.og_image ?? "null"}`, ...previousImages],
    },
  }
}


const PrivacyPage = async () => {

  const data = await getRequest(`get-privacy-policy-page-details`);

  return (
    <>
      <HomeHeader />
      <InnerBanner image={data.banner != null ? data.banner.media : `/images/banner-Privacy-Policy.jpg`} />

      <section className="textual-pages common-spacing-top-bottom">
        <div className="inner-container">
          <div className="detail-wrapper" dangerouslySetInnerHTML={{ __html: data.content.content }} />
        </div>

      </section>
      {/* <h1>Privacy Policy Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>Privacy Policy End</h1> */}
    </>
  )
}

export default PrivacyPage