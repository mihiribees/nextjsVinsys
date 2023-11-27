import Link from "next/link";


const CommonBtn = (props)=>{
    return(
        <Link className={`common-btn ${props.class}`} href={props.link} target={props.placing}>{props.text}<i className="icon">&nbsp;</i></Link>
    )
}
const CommonBtnDownload = (props)=>{
    return(
        <Link className={`common-btn ${props.class}`} href={props.link} target={props.placing}><i className="download-icon">&nbsp;</i> {props.text}</Link>
    )
}
const CommonBtnFancyBox = (props)=>{
    return(
        <a data-fancybox="" className={`common-btn ${props.class}`} href={props.link}>{props.text} <i className="icon">&nbsp;</i></a>
    )
}
const CommonBtnText = (props)=>{
    return(
        <Link className={`common-btn-text ${props.class}`} href={props.link} target={props.placing}><span>{props.text}</span></Link>
    )
}
const CommonHeading = (props)=>{
    return(
        <div className={`common-heading ${props.class}`}>
            <div dangerouslySetInnerHTML={{ __html: props.mainHeading }}/>            
            <span>{props.subHeading}</span>
        </div>
    )
}

const BlogCommonHeading = (props)=>{
    return(
        <div className={`common-heading ${props.class}`}>
            <h1>{props.mainHeading}</h1>
            <span>{props.subHeading}</span>
        </div>
    )
}

const FormSubmitButton = (props)=>{
    return(
        <button type="submit" disabled={props.formsta} class="common-btn">Submit</button>
    )
}
export default CommonBtn;
export {CommonHeading, CommonBtnFancyBox, CommonBtnDownload, CommonBtnText, FormSubmitButton,BlogCommonHeading}