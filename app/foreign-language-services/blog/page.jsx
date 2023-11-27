import { getRequest } from "@/lib/apicall";

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get_blog_list_page`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    title:metadata?.seo?.meta_title ?? metadata.title,
    description: metadata?.seo?.meta_description ?? metadata.title,
    openGraph: {
        images: [`${metadata?.seo?.og_image  ?? null}`, ...previousImages],
    },
  }
}

const Blogpage = async () => {


  const data = await getRequest("get_blog_list_page");
  return (
    <div>
      <h1>Blog Page Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>Blog Page  End</h1>

    </div>
  )
}

export default Blogpage