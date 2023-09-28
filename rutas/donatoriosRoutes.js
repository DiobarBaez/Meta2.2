const express = require("express");
const router = express.Router();
const donatariosController = require("../controladores/donatoriosController");

// Ruta para obtener todos los donatarios
router.get("/", donatariosController.obtenerDonatarios);

// Ruta para crear un nuevo donatario
router.post("/", donatariosController.crearDonatario);

// Ruta para actualizar un donatario por RFC
router.put("/:RFC", donatariosController.actualizarDonatario);

// Ruta para eliminar un donatario por RFC
router.delete("/:RFC", donatariosController.eliminarDonatario);

module.exports = router;
