/*
Módulo que contiene la lógica de validación de la hora.
Aquí estará la lógica de si accedemos a la siguiente ruta.
- Dentro de la `validarHora.js` donde `res.redirect` podría tener un aspecto 
similar a esto cuando se intente acceder a `/endroute`y aún no sea la hora:
(Que no se te olvide `express.Router()` para generar las rutas)
  res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
  return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
*/
const validarHoraActual = (req, res, next) => {
    const hora = req.horaActual; // traemos la hora de horaMiddleware.js para comparar

    if (hora >= 12 && hora <= 24) {
        next(); // acceso permitido
    } else {
        res.locals.mensaje = `Aún no está permitido el acceso. Son las ${req.horaFormatoCompleto}.`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
};

module.exports = validarHoraActual;

/* bloqueo de acceso directo a /endroute: en el else. 
directamente si no es la hora, se te redirige a / con el mensaje correspondiente.
al ir a /endroute directo, Express encuentra la ruta definida en endroute.js. y en ese archivo
se indica que primero deben ejecutarse los middlewares. */

/* res.redirect 
es un método de Express que redirige al usuario a otra URL. 
se redirige al usuario a la ruta raíz (/) con un parámetro llamado mensaje. */

/* /?mensaje= 
query string son los valores que aparecen después del signo de interrogación (?) en una URL. 
se usan para pasar datos entre páginas.
se redirige al usuario al inicio (/) pasando un mensaje como parámetro llamado mensaje. */

/* encodeURIComponent asegura que el mensaje sea válido en una URL. 
por ejemplo, si el mensaje contiene caracteres especiales (como espacios o tildes). */