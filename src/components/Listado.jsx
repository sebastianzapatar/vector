export const Listado=({estudiante})=>{
    return(
        <>
            <div className="card" >
                <img src={estudiante.foto} 
                className="card-img-top" 
                style={{width:"18rem"}}
                alt={estudiante.nombre}/>
                <div className="card-body">
                <p className="card-text">
                    {estudiante.nombre} {estudiante.apellido}   
                </p>
                </div>
            </div>
        </>
    );
}