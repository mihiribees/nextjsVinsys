import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get_cource_by_slug/${params.courseslug}`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    // openGraph: {
    //     images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    // },
  }
}
const ElearningPageDetails = async ({ params }) => {

  const data = await getRequest(`get_cource_by_slug/${params.courseslug}`)
  return (
    <>
      <h1>E learning Course Details Page Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>E learning Course Details Page End</h1>
    </>
  )
}

export default ElearningPageDetails