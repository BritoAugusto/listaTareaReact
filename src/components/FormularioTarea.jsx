// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";



const FormularioTarea = () => {
  const tareasLocalStorage = JSON.parse(localStorage.getItem('tareasKey')) || [];
const [listaTareas, setListaTareas] = useState(tareasLocalStorage);
const [tarea, setTarea] = useState("");
const {register, handleSubmit, formState:{errors}, reset} = useForm();

//ciclo de vida del componente
useEffect(()=>{
  console.log("prueba del ciclo de vida")
  //guardar en localstorage
  localStorage.setItem('tareasKey', JSON.stringify(listaTareas))
}, [listaTareas])

// const tomarTexto = (e)=>{
//   setTarea(e.target.value);
// }

const onSubmit = (data)=>{
console.log(data)
//guardar la tarea en listaTareas
//operador spread ...
setListaTareas([...listaTareas, data.tarea])
reset();
}

const borrarTarea = (nombreTarea)=>{
//listaTareas.splice();
 const tareasFiltradas = listaTareas.filter((item)=> item !== nombreTarea )
//actualizar el state 
setListaTareas(tareasFiltradas)
}

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="agrega una tarea"
            {...register("tarea", {required:"La tarea es un dato obligatorio", minLength:{value:3, message:"La tarea debe contener como mínimo 3 caracteres"}, maxLength:{
              value:100,
              message: "La tarea como máximo debe contener 15 caracteres"
            }})}/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTareas listaTareas = {listaTareas} borrarTarea = {borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
