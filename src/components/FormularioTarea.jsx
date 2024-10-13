import { useForm } from "react-hook-form";
import ListaTareas from "../components/ListaTareas.jsx";
import { useCallback, useEffect, useState } from "react";
import {
  leerTareasApi,
  crearTareaApi,
  borrarTareaApi,
} from "../helpers/queries.js";
import { Button, Form } from "react-bootstrap";

const FormularioTarea = () => {
  const [listaTareas, setListaTareas] = useState([]);
  
  const eliminarTarea = useCallback(
    async (tarea) => {
      await borrarTareaApi(tarea._id)
      const filtrarTareas =  listaTareas.filter((tareaExistente) => tareaExistente._id !== tarea._id)
setListaTareas(filtrarTareas)
    },
    [listaTareas]
  )
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    obtenerTareas()
  }, []);

  const obtenerTareas = async () => {
    const respuesta = await leerTareasApi();
    if(respuesta){
      const listadoTareas = await respuesta.json();
      setListaTareas(listadoTareas);
    }
  };


  const onSubmit = async (tarea) => {
    const nuevaTarea = await crearTareaApi(tarea); 
    if (nuevaTarea) {     
      setListaTareas((tareasPrevias)=>[...tareasPrevias, nuevaTarea]);
      reset(); 
    } else {
      console.error("No se pudo crear la tarea.");
    }
  };


  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="agrega una tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe contener como mínimo 3 caracteres",
              },
              maxLength: {
                value: 100,
                message: "La tarea como máximo debe contener 15 caracteres",
              },
            })}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTareas
        listaTareas={listaTareas}
        eliminarTarea={eliminarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
