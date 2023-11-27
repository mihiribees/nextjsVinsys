"use client"
import { useState } from "react"

const Pagination = () => {
    const itemsCount = []
    for(let i=1; i<=54; i++){
        itemsCount.push([i])
    }
    const [curNumber, SetCurNumber] = useState(1)  
    const [lastNumberItems, SetlastNumberItems] = useState(0) 
    const [curNumberItems, SetCurNumberItems] = useState(10)   
    const handleItemClick = (event) => {
        const value = event.target.textContent;      
        SetCurNumber(value)
    };
    const NavItemsChangeReverse = ()=>{
        SetlastNumberItems(lastNumberItems - 10)
        SetCurNumberItems(curNumberItems - 10)
    }
    const NavItemsChange = ()=>{
        SetlastNumberItems(lastNumberItems + 10)
        SetCurNumberItems(curNumberItems + 10)
    }
    return (
        <ul className="pagination d-flex align-items-center justify-content-center">
            <li onClick={NavItemsChangeReverse} className="prev"><img src={`/images/paginationArrow.svg`} alt=""/></li>
            {itemsCount.slice(lastNumberItems,curNumberItems).map((val)=>{
                 return(
                    <li onClick={handleItemClick} className={curNumber==val ? 'active' : 'non-active'} key={val} id={val}>{val}</li>
                )
            })}
            <li onClick={NavItemsChange} className="next"><img src={`/images/paginationArrow.svg`} alt=""/></li>
        </ul>
    )
}
export default Pagination