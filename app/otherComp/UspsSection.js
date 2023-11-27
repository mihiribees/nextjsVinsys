import CommonSec from "./CommonSec"
import { CommonHeading } from "./Headingtext-Btn"

const UspsSection = ({sectionheading,sectionshortdescription,children})=>{
    return(
        <>
            <CommonSec sectionstyle="offerFeatureSection dark-bg techniqueSection" innerspace="inner-container">
                <div className="heading-wrapper text-center">
                    <CommonHeading mainHeading={sectionheading}/>
                    <p>
                        {sectionshortdescription}
                    </p>
                </div>
                <div className="items d-flex mt-60">
                    {children}
                </div>
            </CommonSec>
        </>
    )
}
export default UspsSection