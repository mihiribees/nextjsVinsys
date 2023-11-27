import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";

const KeyFeature = ({children,image,title,subTitle})=>{
    return(
        <section className="key-features-sec common-spacing-top-bottom">
            <div className="container">
                <div className="inner-content d-flex align-items-center ">
                    <div className="left-section ingwrapper">
                        <img src={image} alt="" />
                    </div>
                    <div className="right-section">
                        <CommonHeading mainHeading ={title} subHeading={subTitle}/>
                        <ul className="items d-flex mt-60">
                            {children}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default KeyFeature;