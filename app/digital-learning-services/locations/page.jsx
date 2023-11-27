import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-location-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}
const LocationPage = async () => {

  const data = await getRequest(`get-location-details`)
  return (
    <>
      <h1>LocationPage Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>LocationPage End</h1>
    </>

  )
}

export default LocationPage