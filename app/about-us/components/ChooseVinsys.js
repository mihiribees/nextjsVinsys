import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";

const ChooseVinsys = ({children,title,subTitle})=>{
    return(
        <section className="reason-to-chooose-sec common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading ={title} subHeading={subTitle}/>
                <div className="inner-content d-flex mt-60">
                    <ul className="items d-flex">
                        {children}                        
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default ChooseVinsys;