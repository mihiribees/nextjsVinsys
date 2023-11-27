import { CommonHeading } from "../components/headingtextbutton/HeadingButton"
import CommonSec from "./CommonSec"

const IndustriesSection = ({sectionstyle, secttionheading, sectionshortdescription, styletype, children }) => {
    return (
        <CommonSec sectionstyle={`our-industries-main ${sectionstyle}`} innerspace="inner-container">
            <div className="text-center">
                <CommonHeading mainHeading={secttionheading} />
                <p>
                    {sectionshortdescription}
                </p>
            </div>
            <div class={`case-studies-ul ${styletype} d-flex`}>
                {children}
            </div>
        </CommonSec>
    )
}
const IndustriesItem = ({imagerequire,image,imagealt,datereuire,day,month,itemtitle,shortdescriptionrequire,shortdescription,linkrequire,btnlink,btntext,children}) => {
    return (
        <div className="item">
            <div className={`img-sec ${imagerequire}`}>
                <img src={image} alt={imagealt}/>
            </div>
            <div className="detail">
                <div class={`date ${datereuire}`}><span>{day}</span>{month}</div>
                <div className="title">{itemtitle}</div>
                <p className={shortdescriptionrequire}>
                    {shortdescription}
                </p>
                <div className={`link ${linkrequire}`}>
                    <CommonBtnText link={btnlink} text={btntext}/>
                </div>
                {children}
            </div>
        </div>
    )
}
export default IndustriesSection
export { IndustriesItem }