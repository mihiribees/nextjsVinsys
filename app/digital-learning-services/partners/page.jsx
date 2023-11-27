import { getRequest } from '@/lib/apicall';
import React from 'react';

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-partner-page`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}


const PartnerPage = async () => {
  const data = await getRequest(`get-partner-page`);
  return (
    <>
      <div>PartnerPage Start</div>
      {
        JSON.stringify(data)
      }
      <div>PartnerPage End</div>
    </>

  )
}

export default PartnerPage