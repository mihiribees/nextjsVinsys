import { getRequest } from '@/lib/apicall'


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-custom-content-development-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
      description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      // openGraph: {
      //     images: [`${metadata?.banner[0]?.media}`, ...previousImages],
      // },
  }
}


const ElearningContent = async () => {

  const data = await getRequest(`get-custom-content-development-page-details`)
  return (
    <>
      <h1>ElearningContent Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>ElearningContent End</h1>

    </>
  )
}

export default ElearningContent