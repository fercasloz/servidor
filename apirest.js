// Obtener el configurador de rutas
const router = express.Router();
// Configurar la accion asociada al login
router.post('/login', function(req, res) {
// Comprobar si la petición contiene los campos ('user' y 'passwd')
if (!req.body.user || !req.body.passwd) {
 res.json({ errormsg: 'Peticion mal formada'});
return;
 }
// La petición está bien formada -> procesarla
// TODO: procesar la peticón
 processLogin(req, res);
});
// Configurar la accion asociada al listado de correos
router.get('/list', function (req, res) {
//TODO: verificar los parametros de la peticion
if (verificarParametrosListar(req)) {
// TODO: procesar la petición
 processListar(req, res);
return;
 }
 res.json({ errormsg: 'Peticion mal formada'});
});
// Configurar la accion asociada a la petición del contenido de un correo
router.get('/email/:email_id',function (req, res) {
//TODO: verificar los parametros de la peticion
if (verificarParametrosEmail(req)) {
// TODO: procesar la petición
 processEmail(req, res);
return;
 }
 res.json({ errormsg: 'Peticion mal formada'});
});
// Añadir las rutas al servidor
server.use('/', router);
// Poner en marcha el servidor