import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  // const metadata = await getRequest(`get-industries-details`);

  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: "Industries Page",
    // description: metadata?.seo?.meta_description ?? metadata.title,
    // openGraph: {
    //     images: [`${metadata?.seo?.og_image  ?? null}`, ...previousImages],
    // },
   
  }
}

const IndustryPage = async() => {

  // const data = await getRequest(`get-industries-details`)
  return (
    <>
    <div>IndustryPage Start</div>
    
    </>
  )
}

export default IndustryPage