import { useEffect, useState } from "react";
import CargaDeColor from "./components/CargaDeColor.jsx";
import ListaDeColores from "./components/ListaDeColores.jsx";

function App() {

  const [misColores, setMisColores] = useState(
    JSON.parse(localStorage.getItem("colores")) || [] );

  //const [misColores, setMisColores] = useState( () => {
  //let coloresGuardados = localStorage.getItem("colores");
  //return ( coloresGuardados ? JSON.parse(coloresGuardados) : [] );
  //});
  
  const funcionCargaDeColor = (color) => {
    setMisColores( [...misColores, color] );
  };

  const funcionBorrarColor = (color) => {
    setMisColores( 
      misColores.filter( (auxcolor) => {
        return (auxcolor !== color)
      })
    );
  };

  useEffect( () => {
    localStorage.setItem("colores",JSON.stringify(misColores));
  },[misColores]);
  
  return (
    <section className='container efectoSombra d-flex flex-column w-50 py-3 mt-5'>
      <div className="d-flex flex-column">
        <CargaDeColor funcionCargaDeColor={funcionCargaDeColor} />
      </div>
      <div className="d-flex flex-wrap gap-3 justify-content-start">
        <ListaDeColores funcionBorrarColor={funcionBorrarColor} misColores={misColores} />
      </div>
    </section>
  );
};

export default App
