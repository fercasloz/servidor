// Cargamos el modulo
const session = require('express-session');
// Creamos el objeto con la configuración 
var sesscfg = {
 secret: 'inventa una buena contraseña aqui',
 resave: true,
 saveUninitialized: true,
 cookie: {
 secure: true,
 sameSite: true,
 maxAge: 8*60*60*1000 // 8 working hours
 }
};
// Se le dice al servidor que use el modulo de sesiones con esa configuracion
server.use(session(sesscfg));
// Poner en marcha el servidor ...
