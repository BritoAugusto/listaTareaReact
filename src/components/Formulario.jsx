import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import {Form, Button} from "react-bootrstap";
const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Agrega una tarea" minLength={5} maxLength={200} required/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;
