const donatariosModel = require("../modelos/donatorios");

// Obtener todos los donatarios
function obtenerDonatarios(req, res) {
  res.json(donatariosModel.donatarios);
}

// Crear un nuevo donatario
function crearDonatario(req, res) {
  const nuevoDonatario = req.body;
  donatariosModel.donatarios.push(nuevoDonatario);
  res.status(201).json(nuevoDonatario);
}

// Actualizar un donatario por RFC
function actualizarDonatario(req, res) {
  const RFC = req.params.RFC;
  const donatarioActualizado = req.body;
  const indice = donatariosModel.donatarios.findIndex((donatario) => donatario.RFC === RFC);

  if (indice === -1) {
    res.status(404).json({ mensaje: "Donatario no encontrado" });
  } else {
    donatariosModel.donatarios[indice] = { ...donatariosModel.donatarios[indice], ...donatarioActualizado };
    res.status(200).json(donatariosModel.donatarios[indice]);
  }
}

// Eliminar un donatario por RFC
function eliminarDonatario(req, res) {
  const RFC = req.params.RFC;
  const indice = donatariosModel.donatarios.findIndex((donatario) => donatario.RFC === RFC);

  if (indice === -1) {
    res.status(404).json({ mensaje: "Donatario no encontrado" });
  } else {
    donatariosModel.donatarios.splice(indice, 1);
    res.status(204).send();
  }
}

module.exports = {
  obtenerDonatarios,
  crearDonatario,
  actualizarDonatario,
  eliminarDonatario,
};
