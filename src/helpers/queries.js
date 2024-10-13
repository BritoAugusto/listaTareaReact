const URLTarea = import.meta.env.VITE_API_TAREA;

export const leerTareasApi = async () => {
  try {
    const respuesta = await fetch(URLTarea);
    return respuesta
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const crearTareaApi = async (nuevaTarea) => {
  try {
    const respuesta = await fetch(URLTarea, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTarea),
    })

   if(!respuesta.ok){
    throw new Error(`Error ${respuesta.status}: No se pudo crear la tarea`) 
   }
   const tareaCreada = await respuesta.json()
   console.log('tarea creada:', tareaCreada)
   return tareaCreada;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarTareaApi = async (_id) => {
  try {
    const respuesta = await fetch(`${URLTarea}/${_id}`, {
      method: "DELETE",
    });
  console.log(respuesta)
    return respuesta
    
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerTareaApi = async (id) => {
  try {
    const respuesta = await fetch(URLTarea+"/"+id);
    return respuesta

  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarTareaApi = async (tareaEditada, id) => {
  try {
    const respuesta = await fetch(URLTarea+"/"+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
