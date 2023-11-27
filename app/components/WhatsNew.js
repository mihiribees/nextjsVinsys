
import WhatsNewService from "./WhatsNewItem";
import { CommonHeading } from "./headingtextbutton/HeadingButton";

const WhatsNewSec = ({data})=>{
   
  
    return(
        <section className="whats-new-sec common-spacing-top-bottom">
            <div className="container">
                <CommonHeading class="text-center" mainHeading={data.heading} subHeading={data.subheading}/>
                <ul className="d-flex justify-content-between">
                    {data.whats_new.map((val)=>{
                        return(
                            <WhatsNewService 
                                key= {val.ordering}
                                image= {val.media}
                                alt= {val.alt}
                                title= {val.heading}
                                description= {val.subheading}    
                                link= {val.url}               
                            />                     
                        )
                    })}
                    
                </ul>
            </div>
        </section>
    )
}
export default WhatsNewSec;
