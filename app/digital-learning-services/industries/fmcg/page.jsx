import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-fmcg-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}
const FmcgPage = async () => {


  const data = await getRequest("get-fmcg-details");
  return (
    <div>
      <h1>FMCG  Page Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>FMCG  Page  End</h1>

    </div>
  )
}
export default FmcgPage