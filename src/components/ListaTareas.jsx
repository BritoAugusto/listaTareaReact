import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea.jsx";



const ListaTareas = ({listaTareas, eliminarTarea}) => {

  return (
    <ListGroup>
      {listaTareas.map((tarea, posicionTarea) => (
        <ItemTarea
          key={tarea._id || posicionTarea}
          tarea={tarea}
          fila={posicionTarea +1}
          eliminarTarea={eliminarTarea}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
