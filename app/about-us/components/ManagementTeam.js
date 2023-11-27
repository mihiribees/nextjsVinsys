import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";

const ManagementTeam = ({children,title})=>{
    return(
        <section className="team-management-sec common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading ={title}/>
                <div className="inner-content d-flex mt-60">                    
                    {children}
                </div>
            </div>
        </section>
    )
}
export default ManagementTeam;