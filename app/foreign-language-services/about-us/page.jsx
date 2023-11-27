import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-about-us-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const FLSAboutUs = async () => {


  const data = await getRequest("get-about-us-page-details");
  return (
    <div>
      <h1>FLSAboutUs Page Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>FLSAboutUs Page  End</h1>

    </div>
  )
}


export default FLSAboutUs