import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"
import CommonSec from "@/app/otherComp/CommonSec"


const FlsCounter = ({mainHeading, subHeading, children}) => {
    return (
        <CommonSec sectionstyle="flsCounter" innerspace="inner-container">
            <div className="heading-wrapper text-center">
                <CommonHeading mainHeading={mainHeading} />
                <p className={subHeading === null ? 'mt-0' : ''}>{subHeading}</p>                    
            </div>

            <div className="items d-flex mt-60 four-column">
                {children}
            </div>
        </CommonSec>
    )
}

const FlsCounterItems = ({listIcon,listIconAlt,listNum,listDesc}) => {
    return(
        <div className="item d-flex">
            <div className="icon-wrapper">
                <img src={listIcon} alt={listIconAlt} />
            </div>
            <div className="content">
                <div className="num">
                    {listNum}
                </div>
                <p>{listDesc}</p>
            </div>
        </div>
    )
}

export default FlsCounter
export {FlsCounterItems}