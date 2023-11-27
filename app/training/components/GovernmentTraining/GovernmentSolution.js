import CommonBtn, { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"

const GovernmentSolution = () => {
    return (
        <section className="govtSolutions common-spacing-top-bottom benefits gradiant-bg">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Our Government Solution"/>                
                <p className="text-center">Lorem ipsum dolor sit.</p>
                <div className="items d-flex mt-60">
                    <div className="item d-flex">
                        <div className="top-section">
                            <img src={`/images/training/icon-govtSolution-1.svg`} alt="" />
                            <p>Experience up to a 100% increase in purchasing power and secure your yearly training</p>
                        </div>
                        <div className="btn-wrapper">
                            <CommonBtn link="" text="Save With Learning Passport" />                            
                        </div>
                    </div>
                    <div className="item d-flex">
                        <div className="top-section">
                            <img src={`/images/training/icon-govtSolution-2.svg`} alt="" />
                            <p>Get exclusive Special Pricing for Government and Military on courses </p>
                            <div className="price"><span>upto</span><p>$3999</p></div>
                        </div>
                        <div className="btn-wrapper">
                            <CommonBtn link="" text="Get Special Pricing" />                            
                        </div>
                    </div>
                    <div className="item d-flex">
                        <div className="top-section">
                            <img src={`/images/training/icon-govtSolution-3.svg`} alt="" />
                            <p>Save training dollars and get unlimited access to instructor-led and on-demand courses</p>
                        </div>
                        <div className="btn-wrapper">
                            <CommonBtn link="" text="Unlock Vinsys + Training Subscription" />                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default GovernmentSolution