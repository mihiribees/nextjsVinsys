import { getRequest } from "@/lib/apicall"

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-about-overview-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}


const AboutUsPage = async () => {

  const data = await getRequest(`get-about-overview-details`)
  return (
    <>
      <h1>Digilearn About US Page data Start</h1>
      {JSON.stringify(data)}
      <h1>Digilearn About US Page data End</h1>
    </>
  )
}

export default AboutUsPage