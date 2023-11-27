"use client"
import { useGetApi } from "@/lib/apicallHooks";
import ServiceItem from "./ServiceItem";
import { CommonHeading } from "./headingtextbutton/HeadingButton";


const ServiceSection = () => {


    const { data: homepagedata, isLoading, error } = useGetApi("get_home_page_details");


    const data = homepagedata?.our_services_section


    if (isLoading) {
        return (
            <><h1>Loading...</h1></>
        )
    }


    if(error){
        return(
            <>
            <h1>{error.message}</h1>
            </>
        )
    }


    return (
        <>
            {
                data && <>
                    <section className="service-sec-heading common-spacing-top-bottom">
                        <div className="container text-center">
                            <CommonHeading mainHeading={data.heading} subHeading={data.subheading} />
                        </div>
                    </section>
                    <section className="services">
                        {data.Services.map((val) => {
                            return (
                                <ServiceItem
                                    key={val.id}
                                    image={val.media}
                                    title={val.heading}
                                    shorDesc={val.content}
                                    link={val.button_link}
                                />
                            )
                        })}


                    </section>
                </>
            }

        </>
    )
}
export default ServiceSection;
