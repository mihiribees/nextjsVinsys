import { getRequest } from '@/lib/apicall'
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-investor-relation-page`);

  const previousImages = (await parent).openGraph?.images || []

  return {
      description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      openGraph: {
          images: [`${metadata?.banner0?.media ?? "https://admin.vinsys.com/content/media/footer-image_3IaXje3.png"}`, ...previousImages],
      },
  }
}

const InvestorPage = async() => {

  const data = await getRequest(`get-investor-relation-page`)



  return (
    <div>InvestorPage</div>
  )
}

export default InvestorPage