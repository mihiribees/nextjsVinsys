import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaStarHalfStroke } from "react-icons/fa6";

const RatingAndStar = ({ star, rating }) => {



    const stars = [];
    const roundedRating = Math.round(star * 2) / 2;



    for (let i = 1; i <= Math.ceil(star); i++) {
        if (i <= roundedRating) {
            stars.push(<AiFillStar color="#064B80" />);
        } else if (i - 0.5 === roundedRating) {
            stars.push(<FaStarHalfStroke color="#064B80" />);
        } else {
            stars.push(<AiFillStar color="#064B80" />);
        }
    }

    return (
        <>
            {
                star !== undefined && rating !== undefined && star !== null && rating !== null && <>
                    <p className='d-flex align-items-center justify-content-center'>
                        <span className="d-flex" style={{ fontSize: "12px", fontWeight: "700", color: "#064B80" }}>

                            {stars}

                        </span>

                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#064B80" }}>|  {rating} Ratings</span>
                    </p>
                </>
            }



        </>

    )
}

export default RatingAndStar