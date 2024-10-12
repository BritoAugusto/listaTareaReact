import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { crearTareaApi, leerTareasApi } from "../helpers/queries.js";



const FormularioTarea = () => {
   const [listaTareas, setListaTareas] = useState([]);


const {register, handleSubmit, formState:{errors}, reset} = useForm();


useEffect(()=>{
obtenerTareas();
}, [])

 const obtenerTareas = async () => {
   const datos = await leerTareasApi();
   if (Array.isArray(datos) && datos.length > 0) {
     setListaTareas(datos);
   } else {
     console.log("Error al obtener tareas");
   }
 };


const onSubmit = async (tarea)=>{
const respuesta = await crearTareaApi(tarea)
if(respuesta.status === 201){
  const tareaCreada = await respuesta.json()
  setListaTareas((prevTareas) => [...prevTareas, tareaCreada]);
  reset()
}
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
      <ListaTareas listaTareas={listaTareas} setListaTareas={setListaTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
