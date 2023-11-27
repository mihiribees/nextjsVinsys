

const CommonSec = ({children,sectionstyle,innerspace})=>{
    return(
        <section className={`common-spacing-top-bottom ${sectionstyle}`}>
            <div className={innerspace}>
                {children}
            </div>
        </section>
    )
}
export default CommonSec