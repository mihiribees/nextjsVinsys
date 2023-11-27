
import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";
import CommonSec from "@/app/otherComp/CommonSec";
import Link from "next/link";


const FlsServices = ({heading,subHeading,children})=>{
    return(
        <CommonSec sectionstyle="flsServices" innerspace="inner-container">
            <div className="heading-wrapper text-center">
                <CommonHeading mainHeading={heading} />
                <p className={subHeading === null ? 'mt-0' : ''}>{subHeading}</p>
            </div>

            <div className="items mt-60 d-flex justify-content-center three-column">
                {children}
            </div>
        </CommonSec>
    )
}

const FlsServicesItems = ({listHeading,listURL,listIcon,listIconAlt}) => {
    return(
        <div className="item">
            <div className="content">
                <div className="heading">{listHeading}</div>
                <Link className="btn arrow-right" href={listURL}></Link>
            </div>
            <div className="icon-wrapper">
                <img className="w-100" src={listIcon} alt={listIconAlt} />
            </div>
        </div>
    )
}

export default FlsServices;
export {FlsServicesItems}