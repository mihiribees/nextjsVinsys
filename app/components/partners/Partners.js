"use client"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CommonHeading } from '../headingtextbutton/HeadingButton';
const PartnerSec = ({children, style,  heading, subHeading})=>{   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 7,         
        },
        desktop: {
          breakpoint: { max: 1199, min: 1024 },
          items: 6,          
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2,
        }
    };
    return(
        <section className={`partner-sec common-spacing-top-bottom ${style}`}>
            <div className="container">
                <CommonHeading class="text-center" mainHeading={heading} subHeading={subHeading}/>
               
            </div>
            <div className="partner-slider">
              <Carousel responsive={responsive} arrows={false} swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} customTransition="linear 4s">  
                  {children}
              </Carousel>
              </div>
        </section>
    )
}
export default PartnerSec;