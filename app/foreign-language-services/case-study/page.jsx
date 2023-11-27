import { getRequest } from "@/lib/apicall";


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-page-banner-seo/?slug=foreign-language-services/case-study`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}



const CaseStudyPage = async () => {


  const data = await getRequest("get-page-banner-seo/?slug=foreign-language-services/case-study");
  return (
    <div>
      <h1>CaseStudyPage Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>CaseStudyPage  End</h1>

    </div>
  )
}

export default CaseStudyPage