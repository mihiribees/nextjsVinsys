import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";

const VinsysJourney = ({children,title,subTitle})=>{    
    return(
        <section className="journey-sec common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading={title} subHeading={subTitle}/>
                <div className="inner-content">
                    <ul className="items d-flex">
                        {children}           
                    </ul>
                </div>                 
            </div>
           
        </section>
    )
}
export default VinsysJourney;