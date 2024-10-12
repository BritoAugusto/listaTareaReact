import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";



const FormularioTarea = () => {

const {register, handleSubmit, formState:{errors}, reset} = useForm();


useEffect(()=>{

}, [])



const onSubmit = (data)=>{

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
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
