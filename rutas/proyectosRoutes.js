const express = require("express");
const router = express.Router();
const proyectosController = require("../controladores/proyectosController");

// Ruta para obtener todos los proyectos
router.get("/", proyectosController.obtenerProyectos);

// Ruta para crear un nuevo proyecto
router.post("/", proyectosController.crearProyecto);

// Ruta para actualizar un proyecto por ID
router.put("/:id", proyectosController.actualizarProyecto);

// Ruta para eliminar un proyecto por ID
router.delete("/:id", proyectosController.eliminarProyecto);

module.exports = router;
