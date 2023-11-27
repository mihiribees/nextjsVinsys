import HomeHeader from '@/app/components/header/HomeHeader';
import { getRequest } from '@/lib/apicall'



export async function generateMetadata({ params, searchParams }, parent) {

    const metadata = await getRequest(`get_event_by_slug/${params.slug}`);

    const previousImages = (await parent).openGraph?.images || []

    return {
        description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
        title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
        openGraph: {
            images: [`${metadata?.banner[0]?.media}`, ...previousImages],
        },
    }
}


const EventDetailsPage = async ({ params }) => {

    const data = await getRequest(`get_event_by_slug/${params.slug}`)
    return (
        <>
            <HomeHeader />
            <h1>Event Page Details Start</h1>
            {
                JSON.stringify(data)
            }
            <h1>Event Page Details End</h1>

        </>

    )
}

export default EventDetailsPage