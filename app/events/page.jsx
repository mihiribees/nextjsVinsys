import { getRequest } from "@/lib/apicall";
import Link from "next/link";


export async function generateMetadata({ params, searchParams }, parent) {


  const metadata = await getRequest("get-event-list-page")


  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    openGraph: {
      images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    },
  }
}

const EventPage = async () => {

  const data = await getRequest("get-event-list-page");


  return (
    <div>
      <h1>Event PAge Start</h1>
      {JSON.stringify(data)}

      {
        data.evnet_list.map((p)=>(
          <>
           <Link href={`/events/${p.slug}`}>Read More</Link><br/>
         
          </>
        ))
      }
    
      <h1>Event PAge End</h1>
    </div>
  )
}

export default EventPage