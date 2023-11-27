"use client"

const FallBackComp = ({ error, resetErrorBoundary }) => {

    return (
        <>
            <section className="thankuPg common-spacing-top-bottom first-section" style={{margin:0}}>
                <div className="inner-container">
                    <div className="content">
                        <img src={`${process.env.PUBLIC_URL}/images/not-found-image.jpg`} alt="Thank you" />
                        <div className="small-heading">Something went wrong...</div>
                        <p>Our engineers are currently fixing something.
                            We expect them to be done soon.</p>
                        <div className="links">

                            <button className={`common-btn `} onClick={resetErrorBoundary}>Refresh<i className="icon">&nbsp;</i></button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FallBackComp