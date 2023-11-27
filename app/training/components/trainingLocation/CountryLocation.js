import React from 'react'

const CountryLocation = () => {
    return (
        <>
            <li>
                <div className="icon-wrapper"><img src={`/images/training/icon-flag.svg`} alt="" /></div>
                <select name="ind" id="" form="">
                    <option value="">India</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Haryana">Haryana</option>
                </select>
            </li>
        </>
    )
}

export default CountryLocation