import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
// import {Form, Button} from "react-bootrstap";


const Formulario = () => {
    const [ItemTareas, setItemTareas] = useState([])
    const [tarea, setTarea] = useState('')
// const tomarTexto = (e)=>{
//     console.log(e.target.value);
//     setTarea(e.target.value);
const handleSubmit = (e)=>{
e.preventDefault();
//guardar la tarea en ItemTareas
//... operador spread
setItemTareas([...ItemTareas, tarea])
setTarea('');
}

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Agrega una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default Formulario;
