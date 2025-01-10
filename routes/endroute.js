/*
Módulo de ruta para la página final.
Cuando consigamos superar el middleware haremos lo siguiente.
- Llegaremos a la ruta `/endroute` y el `endroute.js` tendrá el siguiente contenido: 
Un texto dando la bienvenida y la ruta donde estamos.
*/
const express = require('express');
const router = express.Router(); 

const validarHoraActual = require('../middlewares/validarHora');

// ruta accesible solo si se pasa la validación de hora, por tanto hay que traer los 
// módulos de la validación y usarlos
router.get('/', validarHoraActual, (req, res) => {
    res.send(`
        <h1>Ruta final</h1>
        <h2>¡Bienvenido a la ruta final!</h2>
        <p>Solicitud recibida con método: ${req.method}</p>
        <p>Path: ${req.baseUrl}</p>
    `);
});

module.exports = router;