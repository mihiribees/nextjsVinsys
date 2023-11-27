import { BlogCommonHeading } from "@/app/components/headingtextbutton/HeadingButton";

const AwardsAccolades = ({children, title})=>{
    return(
        <section className="awards-sec common-spacing-top-bottom">
            <div className="inner-container">
                <BlogCommonHeading class="text-center" mainHeading ={title}/>
                <div className="inner-content mt-60">
                    <ul className="items d-flex justify-content-between">                         
                        {children}                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AwardsAccolades;