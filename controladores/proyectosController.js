const proyectosModel = require("../modelos/proyectos");

// Obtener todos los proyectos
function obtenerProyectos(req, res) {
  res.json(proyectosModel.proyectos);
}

// Crear un nuevo proyecto
function crearProyecto(req, res) {
  const nuevoProyecto = req.body;
  proyectosModel.proyectos.push(nuevoProyecto);
  res.status(201).json(nuevoProyecto);
}

// Actualizar un proyecto por ID
function actualizarProyecto(req, res) {
  const id = req.params.id;
  const proyectoActualizado = req.body;
  const indice = proyectosModel.proyectos.findIndex((proyecto) => proyecto.id === id);

  if (indice === -1) {
    res.status(404).json({ mensaje: "Proyecto no encontrado" });
  } else {
    proyectosModel.proyectos[indice] = { ...proyectosModel.proyectos[indice], ...proyectoActualizado };
    res.status(200).json(proyectosModel.proyectos[indice]);
  }
}

// Eliminar un proyecto por ID
function eliminarProyecto(req, res) {
  const id = req.params.id;
  const indice = proyectosModel.proyectos.findIndex((proyecto) => proyecto.id === id);

  if (indice === -1) {
    res.status(404).json({ mensaje: "Proyecto no encontrado" });
  } else {
    proyectosModel.proyectos.splice(indice, 1);
    res.status(204).send();
  }
}

module.exports = {
  obtenerProyectos,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
};
