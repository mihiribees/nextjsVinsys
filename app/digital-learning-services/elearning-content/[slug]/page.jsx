import { getRequest } from '@/lib/apicall'
import React from 'react'
export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get_content_child_by_slug/${params.slug}`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}


const ElearningContentPage = async ({ params }) => {
  const data = await getRequest(`get_content_child_by_slug/${params.slug}`);
  return (
    <>
      <h1>E learning Content Page Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>E learning Content Page End</h1>
    </>
  )
}

export default ElearningContentPage