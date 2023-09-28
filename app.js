const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Configurar las rutas utilizando el archivo index.js en la carpeta de rutas
app.use('/api', require('./rutas'));

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      mensaje: error.message
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});