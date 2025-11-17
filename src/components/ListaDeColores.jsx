function ListaDeColores({funcionBorrarColor,misColores}){
    return <>
        {misColores.map( (auxColor,indice) => {
            return ( 
            <div className="tarjeta efectoSombra" key={indice} >
                <div className="fs-6 fw-semibold ms-2 my-2">
                    <p>{(auxColor[0].toUpperCase() + auxColor.slice(1))}</p>
                </div>
                <div className="d-flex justify-content-center bg-info-subtle">
                    <div className="cajaColorEnListado" style={{backgroundColor:`${auxColor}`}}>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger btn-sm my-2 me-2" type="button" onClick={ () => { funcionBorrarColor(`${auxColor}`) }} >Borrar</button>
                </div>
            </div> );
        } )}
    </>
}

export default ListaDeColores