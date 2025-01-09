/*
Módulo de ruta para la página principal.
La primera ruta que debe salir nada más inicializar el servidor será `index.js`
En esta ruta habrá lo siguiente:
- Un texto de bienvenida y la hora actual
- Un botón que enlace `/endroute`
- Al clickar tendrá que validar con el middleware `validarHora.js`si la hora es correcta para poder continuar. Solo se podrá acceder a `/endroute` si la hora es está entre las 12h de la mañana y las 24h.
- Si es antes de las 12 al clickar en el botón nos saldrá un mensaje que diga algo como "Aún no son las 12 de la mañana"
- Si accedemos directamente a la ruta `/endroute`, nos devolverá el mismo error y misma ruta que si pulsaramos el botón 
*/
const express = require('express');
const router = express.Router();

const obtenerHoraActual = require('../middlewares/horaMiddleware');

router.get('/', obtenerHoraActual, (req, res) => {
    const mensaje = req.query.mensaje || 'Bienvenido';
    res.send(`
        <h1>${mensaje}</h1>
        <p>La hora actual es: ${req.horaActual}:00</p>
        <form action="/endroute" method="get">
            <button type="submit">Entrar</button>
        </form>
    `);
});

module.exports = router;