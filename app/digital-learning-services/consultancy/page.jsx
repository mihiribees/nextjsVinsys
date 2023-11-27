import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-consultancy-page-details`);


  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}


const CounsultancyPage = async () => {


  const data = await getRequest(`get-consultancy-page-details`)
  return (
    <>
      <h1>CounsultancyPage Details Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>CounsultancyPage Details End</h1>

    </>
  )
}

export default CounsultancyPage