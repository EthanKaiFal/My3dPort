export const Button = ({name, isBeam=false, containerClass}) => {
    return (
        <button className={`btn`}>
            {isBeam && (
                <span style={{position:"relative", display:"flex", height:"8px", width:"8px"}}>
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
            )}
            {name}
        </button>
    )
}
