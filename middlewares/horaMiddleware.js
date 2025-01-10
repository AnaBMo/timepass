/*
 Middleware para obtener la hora actual.
 Recuerda que hay que pasarla como una req y con js podemos obtener la fecha con new Date()
*/

// la solicitud req. es para poder usar ese dato más adelante
const obtenerHoraActual = (req, res, next) => {
    const now = new Date();
    req.horaActual = now.getHours(); // necesitamos números enteros para comparar con la franja válida
    req.horaFormatoCompleto = `${req.horaActual}:${now.getMinutes()}`; // después se formatea para mostrar
    next();
};

module.exports = obtenerHoraActual;