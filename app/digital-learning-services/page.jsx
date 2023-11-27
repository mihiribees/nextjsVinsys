import { getRequest } from "@/lib/apicall";
import HomeHeader from "../components/header/HomeHeader";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-digilerning-home-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const DigiLearnPage = async () => {

  const data = await getRequest(`get-digilerning-home-page-details`)
  return (
    <>
      <HomeHeader />
      <h1>DigiLearnPage Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>DigiLearnPage End</h1>
    </>
  )
}

export default DigiLearnPage