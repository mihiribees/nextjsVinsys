import CommonBtn from "./headingtextbutton/HeadingButton";

const WhatsNewService = (props)=>{
    return(
        <li>
            <div className="image">
                <img className="w-100" src={props.image} alt={props.alt} />
                <div className="detail">
                    <div className="title">{props.title}</div>
                    <div className="description">
                        <p>
                            {props.description}
                        </p>
                    </div>
                    <div className="links">
                        <CommonBtn class="short" link={props.link} text="View All" />
                    </div>
                </div>
            </div>
        </li>
    )
}
export default WhatsNewService;