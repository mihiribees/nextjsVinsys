import CommonBtn from "../other/Headingtext-Btn"
const CommonDescription = ({topstyle,children,btnreq,btnlink,btntext}) => {
    return (
        <section class={`common-spacing-top-bottom ${topstyle}`}>
            <div class="inner-container">
                {children}                
                <div className={`links ${btnreq}`}>
                    <CommonBtn link={btnlink} text={btntext} />
                </div>
            </div>
        </section>
    )
}
export default CommonDescription