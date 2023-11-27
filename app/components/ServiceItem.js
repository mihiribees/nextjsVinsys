import CommonBtn from "./headingtextbutton/HeadingButton";

const ServiceItem = (props)=>{
    return(
        <div className="service-list">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="left">
                    <img className="w-100" src={props.image} alt={props.alt}/>
                </div>
                <div className="right">
                    <div className="title" dangerouslySetInnerHTML={{ __html: props.title }}>
                        
                    </div>
                    <div className="description">
                        <p>
                            {props.shorDesc}
                        </p>
                    </div>
                    <div className="links">
                        <CommonBtn class="short" link={props.link} text="Get to Know Us" placing="_blank" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceItem;