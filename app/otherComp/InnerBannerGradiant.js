const InnerBannerGradiant = ({style, children})=>{
    return(
        <section className={`inner-banner gradiant-bg common-spacing-top-bottom ${style}`}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}
export default InnerBannerGradiant