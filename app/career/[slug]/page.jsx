import { getRequest } from '@/lib/apicall';
import React from 'react'


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-job-by-slug/${params.slug}`);

  const previousImages = (await parent).openGraph?.images || []

  return {
      description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      openGraph: {
          images: [`${metadata?.banner[0]?.media}`, ...previousImages],
      },
  }
}


const Careerdetailspage = async({params}) => {

  const data = await getRequest(`get-job-by-slug/${params.slug}`)
  return (
    <>
    <h1>Career Details Page start</h1>
    
    <div>{JSON.stringify(data)}</div>
    <h1>Career Details Page End</h1>
    </>
  )
}

export default Careerdetailspage