import "bootstrap/dist/css/bootstrap.min.css";
 import "./App.css";
import FormularioTarea from "./components/FormularioTarea.jsx";
import { useEffect, useState } from "react";
import { leerTareasApi } from "./helpers/queries.js";
import ListaTareas from './components/ListaTareas.jsx'
function App() {
const [listaTareas, setListaTareas] = useState([]);

useEffect(() => {
  obtenerTareas();
}, []);

const agregarTarea = (nuevaTarea)=>{
  setListaTareas((tareasAnteriores)=>[...tareasAnteriores, nuevaTarea]);
}

 const obtenerTareas = async () => {
   const datos = await leerTareasApi();
   if (Array.isArray(datos) && datos.length > 0) {
     setListaTareas(datos);
   } else {
     console.log("Error al obtener tareas");
   }
 };

  return (
    <>
      <main className="container my-5 ">
        <h1 className="text-light text-center">Bienvenido</h1>
        <h2 className="text-light text-center">Ingresa tus tareas</h2>
        <FormularioTarea
          agregarTarea={agregarTarea}
        ></FormularioTarea>
        <ListaTareas
          listaTareas={listaTareas}
          setListaTareas={setListaTareas}
        ></ListaTareas>
      </main>
    </>
  );
}

export default App;
