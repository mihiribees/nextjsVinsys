const MapSection = ({topstyle, mapurl})=>{
    return(
        <section class={`${topstyle} mapWrapper d-flex`}>            
            <iframe src={mapurl} width="1920" height="750" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}
export default MapSection