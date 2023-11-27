import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`fls-get_contact_page_details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    title:metadata?.seo?.meta_title ?? metadata.title,
    description: metadata?.seo?.meta_description ?? metadata.title,
    openGraph: {
        images: [`${metadata?.seo?.og_image  ?? null}`, ...previousImages],
    },
  }
}

const ContactUsPage = async () => {


  const data = await getRequest("fls-get_contact_page_details");
  return (
    <div>
      <h1>Contact US Page Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>Contact US Page  End</h1>

    </div>
  )
}

export default ContactUsPage