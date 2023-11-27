import { getRequest } from '@/lib/apicall';
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-bfsi-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const BFSIPage = async () => {


  const data = await getRequest("get-bfsi-details");
  return (
    <div>
      <h1>BFSI  Page Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>BFSI  Page  End</h1>

    </div>
  )
}


export default BFSIPage