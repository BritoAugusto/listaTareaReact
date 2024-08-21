import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main className="container my-5 text-center">
        <h1>Bienvenido</h1>
        <h2>Ingresa tus tareas</h2>
        <Formulario></Formulario>
      </main>
    </>
  );
}

export default App;
