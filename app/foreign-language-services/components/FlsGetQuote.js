import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"
import CommonSec from "@/app/otherComp/CommonSec"



const FlsGetQuote = ({flsServicelist}) => {
    return (
        <CommonSec sectionstyle="flsGetQuote" innerspace="inner-container">
            <div className="inner-content d-flex">
                <div className="content-wrapper">
                    <CommonHeading mainHeading="Get A Quote" />
                    <div class="img-wrapper">
                        <img src={`/images/fls/getQuote.png`} alt="Name Icon" />
                    </div>
                </div>
                <div className="form-wrapper">
                    {/* <GetQuoteForm style="contact-form" FormStyle="common-from" /> */}
                </div>
            </div>
        </CommonSec>
    )
}

export default FlsGetQuote