import { getRequest } from '@/lib/apicall';

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-aviation-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const AviationPage = async () => {


  const data = await getRequest("get-aviation-details");
  return (
    <div>
      <h1>AviationPage Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>AviationPage  End</h1>

    </div>
  )
}

export default AviationPage