

const InnerBanner = ({ children, style, image, textNeed }) => {
    return (
        <>
            <section className={`inner-banner ${style}`}>
                <div className="image">
                    <img className="w-100" src={image} alt="" />

                    <div className={`text ${textNeed}`}>
                        <div className='container d-flex justify-content-end'>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
            
        </>

    )
}
export default InnerBanner;