import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({tarea, fila,  eliminarTarea}) => {
 
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {fila} - {tarea.tarea}
      <Button variant="danger" onClick={()=>eliminarTarea(tarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
