import $ from 'jquery'


const FlsDataSecurity = ({children}) => {
    $(document).ready(function() {
        $(".flsDataSecurity  .items").each(function() {
            var elem = $(this);
            if (elem.children(".item").length % 2 !== 0) {
                $(".flsDataSecurity .img-wrapper").addClass('oddItems');
            }
        });    
    })

    return (
        <>
            {children}
        </>
    )
}

export default FlsDataSecurity