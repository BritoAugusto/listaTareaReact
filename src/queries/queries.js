export const leerTareasApi = async () => {
  try {
    const respuesta = await fetch(URLTarea);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const crearTareaApi = async (tareaNueva) => {
  try {
    const respuesta = await fetch(URLTarea, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaNueva),
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarTareaApi = async (id) => {
  try {
    const respuesta = await fetch(URLTarea + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerTareaApi = async (id) => {
  try {
    const respuesta = await fetch(URLTarea + "/" + id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarTareaApi = async (tareaEditada, id) => {
  try {
    const respuesta = await fetch(URLTarea + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaEditada),
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};
