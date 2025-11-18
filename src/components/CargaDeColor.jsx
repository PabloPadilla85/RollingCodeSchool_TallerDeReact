import { useState,useEffect } from "react"
import React from 'react'

function CargaDeColor({funcionCargaDeColor}) {
    
    const [inputColor,setInputColor] = useState("");

    const cambioDeInput = (e) => {
        setInputColor(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        funcionCargaDeColor(inputColor);
    }

    return <>
        <div className="fs-6 fw-semibold ms-2 my-2">
            <p>Adminstrador de colores</p>
        </div>
        <div className="d-flex gap-3 justify-content-center align-items-center bg-info-subtle py-3">
            <div className="cajaDeColorParaCarga" style={{ backgroundColor:`${inputColor}`}}></div>
            <div>
                <form id="formularioDeCarga" onSubmit={handleSubmit}>
                    <input className="form-control" placeholder="Ingrese un color" type="text" required value={ inputColor } onChange={cambioDeInput} />
                </form>
            </div>
        </div>
        <div className="d-flex justify-content-end">
            <button className="btn btn-info text-light my-2 me-2" type="submit" form="formularioDeCarga">Guardar</button>
        </div>
    </>
};

export default CargaDeColor