import CommonBtn from "@/app/components/headingtextbutton/HeadingButton";

const GroupTraining = ()=>{
    return(
        <section className="group-training-sec common-spacing-top-bottom">
            <div className="inner-container">
                <div className="inner-content d-flex">
                    <div className="left-section">
                        <div className="group-heading">Looking for group training</div>
                        <CommonBtn link="" text="Enquire Now"/>
                    </div>
                    <div className="right-section">
                        <img src="images/delivery/groupTrainingBg.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default GroupTraining;