import CommonSec from "./CommonSec"
import { CommonHeading } from "./Headingtext-Btn"

const ErrorSection = ({errorheading})=>{
    return(
        <CommonSec sectionstyle="d-flex justify-content-center align-items-center min-height-300" >
            <CommonHeading mainHeading={errorheading}/>
        </CommonSec>
    )
}
export default ErrorSection