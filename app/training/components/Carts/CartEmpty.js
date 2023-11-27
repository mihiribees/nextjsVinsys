import CommonBtn from "@/app/components/headingtextbutton/HeadingButton"
import CommonSec from "@/app/otherComp/CommonSec"
import RuningClass from "../RuningClasses/RuningClasses"
import CartAdded from "./CartAdded"

const CartEmpty = () => {
    return (
        <>
            <CommonSec sectionstyle="cartEmpty" innerspace="inner-container">
                <div class="inner-content">
                    <img src={`/images/cart/cartEmpty.svg`} alt="cartEmpty" className="cartEmptyImg" />
                    <div className="heading">Your Cart Is Empty</div>
                    <p>Looks Like You Haven’t added Any Course On Your Cart. Pls add Courses and Enjoy Seamless Experience On Our Platform.</p>
                    <div className="btn-wrapper d-flex justify-content-center">
                        <CommonBtn class="light-bg" link="" text="Back To Home"/>
                        <CommonBtn link="" text="Add Courses "/>
                    </div>
                </div>
            </CommonSec>
            <RuningClass topfilterneed="no-require" serachresult="no-require" searchboxneed="no-require"/>
            <CartAdded/>
        </>
    )
}
export default CartEmpty