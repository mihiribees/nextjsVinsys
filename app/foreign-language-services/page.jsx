import { getRequest } from "@/lib/apicall";
import FlsHomeBanner from "./components/FlsHomeBanner";
import parse from 'html-react-parser';
import FlsServices, { FlsServicesItems } from "./components/FlsServices";
import FlsCounter, { FlsCounterItems } from "./components/FlsCounter";


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-fls-home-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}


const FLSPage = async () => {


  const data = await getRequest("get-fls-home-page-details");
  return (
    <div>

      <FlsHomeBanner
        heading={parse(data.banner.heading)}
        subheading={parse(data.banner.subheading)}
        btnText={data.banner.button_text}
        btnLink={data.banner.url}
        media={data.banner.media}
        mediaAlt={data.banner.alt}
      >

      </FlsHomeBanner>


      {data.our_services_list != null ?
        <FlsServices
          heading={data.our_services_section.heading}
          subHeading={data.our_services_section.subheading} >

          {data.our_services_list.map((val) => {
            return (
              <FlsServicesItems
                key={val.id}
                listHeading={val.heading}
                listURL={val.url}
                listIcon={val.media}
                listIconAlt={val.alt != null ? val.alt : val.heading}
              />
            )
          })}
        </FlsServices>
        : ''}

      {data.speak_for_themselvess_list != null ?
        <FlsCounter
          mainHeading={data.speak_for_themselvess_section.heading}
          subHeading={data.speak_for_themselvess_section.subheading} >

          {data.speak_for_themselvess_list.map((val) => {
            return (
              <FlsCounterItems
                key={val.id}
                listIcon={val.thumb_image}
                listIconAlt={val.thumb_alt != null ? val.thumb_alt : val.heading}
                listNum={val.heading}
                listDesc={val.subheading}
              />
            )
          })}
        </FlsCounter>
        : ''}


      <div >
        {/* <FlsGetQuote /> */}
      </div>


      {/* <h1>FLSPage Data</h1> */}
      {/* {
        JSON.stringify(data)
      }
      <h1>FLSPage  End</h1> */}

    </div >
  )
}


export default FLSPage