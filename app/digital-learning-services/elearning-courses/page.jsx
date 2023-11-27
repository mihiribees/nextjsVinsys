import { getRequest } from '@/lib/apicall'
import Link from 'next/link';


export async function generateMetadata({ params, searchParams }, parent) {

  const metadata = await getRequest(`get-ready-to-go-digilearn-page-details`);

  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const ElearningPage = async () => {

  const data = await getRequest(`get-ready-to-go-digilearn-page-details`)
  return (
    <>
      <h1>DIGI LEARN ELEARNING PAGE Start</h1>
      {JSON.stringify(data)}
      {data.cource_list.map((p) => (
        <>
          <Link href={`/digital-learning-services/elearning-courses/${p.slug}`}>Read More</Link>
          <br />
        </>
      ))}
      <h1>DIGI LEARN ELEARNING PAGE End</h1>
    </>
  )
}

export default ElearningPage