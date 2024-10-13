import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearTareaApi } from "../helpers/queries.js";



const FormularioTarea = ({agregarTarea}) => {
   


const {register, handleSubmit, formState:{errors}, reset} = useForm();






const onSubmit = async (tarea)=>{
const nuevaTarea = await crearTareaApi(tarea);
if (nuevaTarea && nuevaTarea._id) {
  agregarTarea(nuevaTarea);
  reset()
}else{
  console.error("error al crear la tarea", nuevaTarea)
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
      
    </section>
  );
};

export default FormularioTarea;
