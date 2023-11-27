import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-contact-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const ContactUsPage = async () => {

  const data = await getRequest(`get-contact-details`);
  return (
    <>
      <h1>Contact Us Page Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>Contact Us Page End</h1>
    </>
  )
}

export default ContactUsPage