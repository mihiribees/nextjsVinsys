import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"


const WhyVinsys = ({topstyle, heading, image, children}) => {
    return (
        <section class={`whyVinsysSection common-spacing-top-bottom ${topstyle}`}>
            <div class="inner-container">
                <CommonHeading class="text-center" mainHeading={heading}/>                
                <div class="inner-content d-flex mt-60">
                    <div class="img-wrapper">
                        <img src={image} alt="whyVinsys"/>
                    </div>
                    <div class="items d-flex">
                        {children}                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyVinsys