/*
Contiene el código principal de la aplicación con la configuración de Express, 
middleware y rutas.
*/
const express = require('express');
const app = express();

const indexRoute = require('./routes/index')
const endrouteRoute = require('./routes/endroute');

app.use(obtenerHoraActual);

app.use('/endroute', endrouteRoute); 
app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Express está escuchando en el puerto 3000');
});