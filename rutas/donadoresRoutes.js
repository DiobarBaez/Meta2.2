const express = require("express");
const router = express.Router();
const donadoresController = require("../controladores/donadoresController");

// Ruta para obtener todos los donadores
router.get("/", donadoresController.obtenerDonadores);

// Ruta para crear un nuevo donador
router.post("/", donadoresController.crearDonador);

// Ruta para actualizar un donador por RFC
router.put("/:RFC", donadoresController.actualizarDonador);

// Ruta para eliminar un donador por RFC
router.delete("/:RFC", donadoresController.eliminarDonador);

module.exports = router;
