import React from 'react'

const Modal = ({ setmodalOpen, children,modalHeading }) => {
    return (
        <div id="apply-form" class="show-form">
            <div class="inner">
                <button type="button" class="close-form" onClick={() => { setmodalOpen(false) }}>X</button>
                <div class="heading">{modalHeading}</div>
                {children}
            </div>
        </div>
    )
}

export default Modal