import React from "react"
const BlogItem = ({children})=>{
    return(

        <ul className={`items d-flex ${React.Children.count(children) === 0 ? 'nodata' : 'data'}`}>
            {children}
        </ul>
    )
}

export default BlogItem