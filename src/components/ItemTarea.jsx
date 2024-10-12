import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaApi } from "../helpers/queries.js";

const ItemTarea = ({tarea, fila, setListaTareas}) => {
console.log(tarea)
  const borrarTarea = async()=>{
    const respuesta = await borrarTareaApi(tarea._id)
    if(respuesta.status === 200){
      setListaTareas((prevTareas)=>prevTareas.filter((t)=> t._id !== tarea._id))
    }else{
      console.log("Error al eliminar la tarea")
    }
  }

  return (
    <ListGroup.Item key={tarea._id} className="d-flex justify-content-between">
      {fila} -{tarea.tarea}
      <Button variant="danger" onClick={borrarTarea}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
