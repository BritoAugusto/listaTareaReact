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

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const datos = await leerTareasApi();
    if(datos){
      const listadoTareas = await datos.json();
      console.log("Listado de tareas", listaTareas)
      setListaTareas(listadoTareas);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (tarea) => {
    const nuevaTarea = await crearTareaApi(tarea); 
    if (nuevaTarea) {     
      setListaTareas([...listaTareas, nuevaTarea]);
      reset(); 
    } else {
      console.error("No se pudo crear la tarea.");
    }
  };

  const eliminarTarea = useCallback(
    async (tarea) => {
      await borrarTareaApi(tarea._id)
      const filtrarTareas =  listaTareas.filter((tareaExistente) => tareaExistente._id !== tarea._id)
setListaTareas(filtrarTareas)
    },
    [listaTareas]
  )

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
        // setListaTareas={setListaTareas}
        eliminarTarea={eliminarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
