import React from 'react'
import HomeHeader from '../components/header/HomeHeader';
import { getRequest } from '@/lib/apicall';
import Link from 'next/link';

export async function generateMetadata({ params, searchParams }, parent) {


  const metadata = await getRequest("get-career-page")


  const previousImages = (await parent).openGraph?.images || []

  return {
      description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
      openGraph: {
          images: [`${metadata?.banner[0]?.media}`, ...previousImages],
      },
  }
}


const CareerPage = async() => {

  const data = await getRequest("get-career-page");
  return (
    <>
      <HomeHeader />
      <h1>Career Page data Start</h1>
      {
        JSON.stringify(data)
      }

      {
        data.job_list_section.jobs_liste.map((p)=>(
          <>
           <Link href={`/career/${p.slug}`}>Read More</Link>
          </>
        ))
      }
      <h1>Career Page data End</h1>
    </>
  )
}

export default CareerPage