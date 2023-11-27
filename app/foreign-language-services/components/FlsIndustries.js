import $ from 'jquery';
import CommonSec from "../../other/CommonSec";
import { CommonHeading } from "../../other/Headingtext-Btn";

const FlsIndustries = ({sectionStyle,heading,subHeading,children}) => {
    $(document).ready(function () {
        var radius = 340;
        var fields = $('.flsIndustries .item'), container = $('.circle-wrapper'), width = container.width(), height = container.height();
        var angle = 0, step = (2*Math.PI) / fields.length;
        fields.each(function() {
            var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
            var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
            $(this).css({
                left: x + 'px',
                top: y + 'px'
            });
            angle += step;
        });
    })

    return (
        <CommonSec sectionstyle={sectionStyle} innerspace="inner-container">
            <div className='inner-content d-flex justify-content-center'>
                <div className="circle-wrapper">
                    <div className="center-container text-center">
                        <CommonHeading mainHeading={heading} />
                        <p className={subHeading === null ? 'mt-0' : ''}>{subHeading}</p>

                        <span class="border-animation ba1"></span>
                        <span class="border-animation ba2"></span>
                        <span class="border-animation ba3"></span>
                    </div>
                    
                    {children}

                    
                </div>
            </div>
        </CommonSec>      
    )
}

const FlsIndustriesItems = ({itemImg,itemImgAlt,itemDesc}) => {
    return(
        <div className="item">
            <div className="icon-wrapper">
                <img src={itemImg} alt={itemImgAlt} />
            </div>
            <p>{itemDesc}</p>
        </div>
    )
}

export default FlsIndustries
export {FlsIndustriesItems}
