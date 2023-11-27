import { getRequest } from '@/lib/apicall'
import React from 'react'
import { CommonHeading } from '../components/headingtextbutton/HeadingButton'
import HomeHeader from '../components/header/HomeHeader'

export async function generateMetadata({ params, searchParams }, parent) {


  const metadata = await getRequest("get_contact_page_details")


  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    title: metadata?.seo?.meta_description ? metadata.seo.meta_description : "Vinsys",
    // openGraph: {
    //   images: [`${metadata?.banner[0]?.media}`, ...previousImages],
    // },
  }
}


const ContactUsPage = async () => {


  const data = await getRequest("get_contact_page_details");
  return (
    <>
      <HomeHeader />
      <section className="contact-top-sec">
        <div className="inner-container d-flex justify-content-between align-items-center">
          <div className="left">
            <img src={data.get_in_touch_section.image.media} alt="" />
          </div>
          <div className="right">
            <CommonHeading mainHeading={data.get_in_touch_section.heading} />
            {/* <EnquiryForm style="contact-form" FormStyle="common-from" /> */}
          </div>
        </div>
      </section>
      {/* <h1>Contact US Page Data</h1>
      {
        JSON.stringify(data)
      }
      <h1>Contact US Page  End</h1> */}

    </>
  )
}

export default ContactUsPage