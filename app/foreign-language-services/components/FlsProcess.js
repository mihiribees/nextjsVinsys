import CommonSec from "../../other/CommonSec"
import { CommonHeading } from "../../other/Headingtext-Btn";

const FlsProcessWrapper = ({heading,subHeading,children,styleClass}) => {
    return(
        <>
            <CommonSec sectionstyle={`flsProcess ${styleClass}`} innerspace="inner-container">
                <div className="heading-wrapper text-center">
                    <CommonHeading mainHeading={heading}></CommonHeading>
                    <p className={subHeading === null ? 'mt-0' : ''}>{subHeading}</p>
                </div>
                <div className="items d-flex mt-60">
                    { children }
                </div>
            </CommonSec>
        </>
    )
}

const FlsProcessItems = ({itemKey, icon, iconAlt, title}) => {
    return(
        <div className="item">
            <div className="inner-content">
                <div className="processCount"><span className="process">Process</span><span className="key">{itemKey}</span></div>
                <div className="icon-wrapper">
                    <img src={icon} alt={iconAlt} />
                </div>
                <div className="heading">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default FlsProcessWrapper
export {FlsProcessItems}