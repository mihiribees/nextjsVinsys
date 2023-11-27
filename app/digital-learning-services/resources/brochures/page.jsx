import { getRequest } from '@/lib/apicall'

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-broucher-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    title:metadata?.seo?.meta_title ?? metadata.title,
    description: metadata?.seo?.meta_description ?? metadata.title,
    openGraph: {
        images: [`${metadata?.seo?.og_image  ?? null}`, ...previousImages],
    },
    // description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    // title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    // openGraph: {
    //     images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    // },
  }
}

const Brochures = async () => {
  const data = await getRequest(`get-broucher-page-details`);

  return (
    <>
      <h1>Brochures Details Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>Brochures Details End</h1>
    </>

  )
}

export default Brochures