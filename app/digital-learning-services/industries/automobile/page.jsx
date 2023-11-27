import { getRequest } from "@/lib/apicall";



export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-automobile-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
      description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      openGraph: {
          images: [`${metadata?.banner[0]?.media}`, ...previousImages],
      },
  }
}

const AutoMobilePage = async() => {

  const data = await getRequest(`get-automobile-details`);
  
  return (
    <>
    <h1>Automobile Page Start</h1>
    {
      JSON.stringify(data)
    }
    <h1>Automobile Page End</h1>
    </>
  )
}

export default AutoMobilePage