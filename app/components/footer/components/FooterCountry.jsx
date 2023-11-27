const CountryData = ({children,iconImage,country})=>{
    return(
        <div className="item">
            <div className="country d-flex align-items-center">
                <div className="icon">
                    <img src={iconImage} alt=""/>
                </div>
                <div className="title">{country}</div>
            </div>
            {children}
        </div>
    )
}
const CityData = (props)=>{
    return(
        <div className="city-data">
            <div className="title">{props.cityname}</div>
            <ul>
                <li className="call"><a href={`tel:${props.phone}`}>{props.phone}</a></li>
                <li className="email"><a href={`mailto:${props.emailText}`}>{props.emailText}</a></li>
                <li className="add">{props.addText}</li>
            </ul>
        </div>
    )
}
export default CountryData;
export {CityData}