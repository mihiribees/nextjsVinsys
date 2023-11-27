import { getRequest } from "@/lib/apicall";


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-software-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}


const SoftwarePage = async () => {


  const data = await getRequest("get-software-details");
  return (
    <div>
      <h1>SoftwarePage  Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>SoftwarePage  End</h1>

    </div>
  )
}

export default SoftwarePage