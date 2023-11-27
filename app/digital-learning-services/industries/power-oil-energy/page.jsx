import { getRequest } from '@/lib/apicall'


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-poweroil-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const PowerOilEnergy = async () => {

  const data = await getRequest(`get-poweroil-details`)
  return (
    <>
      <h1>Power Oil Details Page Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>Power Oil Details Page End</h1>

    </>
  )
}

export default PowerOilEnergy