const donadoresModel = require("../modelos/donadores");

// Obtener todos los donadores
function obtenerDonadores(req, res) {
  res.json(donadoresModel.donadores);
}

// Crear un nuevo donador
function crearDonador(req, res) {
  const nuevoDonador = req.body;
  donadoresModel.donadores.push(nuevoDonador);
  res.status(201).json(nuevoDonador);
}

// Actualizar un donador por RFC
function actualizarDonador(req, res) {
  const RFC = req.params.RFC;
  const donadorActualizado = req.body;
  const indice = donadoresModel.donadores.findIndex((donador) => donador.RFC === RFC);

  if (indice === -1) {
    res.status(404).json({ mensaje: "Donador no encontrado" });
  } else {
    donadoresModel.donadores[indice] = { ...donadoresModel.donadores[indice], ...donadorActualizado };
    res.status(200).json(donadoresModel.donadores[indice]);
  }
}

// Eliminar un donador por RFC
function eliminarDonador(req, res) {
  const RFC = req.params.RFC;
  const indice = donadoresModel.donadores.findIndex((donador) => donador.RFC === RFC);

  if (indice === -1) {
    res.status(404).json({ mensaje: "Donador no encontrado" });
  } else {
    donadoresModel.donadores.splice(indice, 1);
    res.status(204).send();
  }
}

module.exports = {
  obtenerDonadores,
  crearDonador,
  actualizarDonador,
  eliminarDonador,
};
