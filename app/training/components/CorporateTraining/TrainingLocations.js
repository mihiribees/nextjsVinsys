import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"

const TrainingLocations = ()=>{
    return(
    <section className="Map_wrap common-spacing-top-bottom">
        <div className="container">
            <CommonHeading class="text-center" mainHeading="Our Locations"/>
            <div className="inner-content d-flex justify-content-center mt-60">
                <img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Map wrap.png`} alt="" />
            </div>
        </div>
    </section>
    )
}
export default TrainingLocations