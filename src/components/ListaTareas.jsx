import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea.jsx";



const ListaTareas = ({listaTareas, setListaTareas}) => {

  return (
    <ListGroup>
      {listaTareas.map((tarea, posicionTarea) => (
        <ItemTarea
          key={tarea._id}
          tarea={tarea}
          fila={posicionTarea +1}
          setListaTareas={setListaTareas}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
