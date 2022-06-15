var login = req.body.user;
var passwd = req.body.passwd;
db.get(
// consulta y parámetros cuyo valor será usado en los '?'
'SELECT * FROM users WHERE login=?', login,
// funcion que se invocará con los datos obtenidos de la base de datos
function(err, row) {
if (row == undefined) {
// La consulta no devuelve ningun dato -> no existe el usuario
 res.json({ errormsg: 'El usuario no existe'});
 } else if (row.passwd === passwd) {
// La contraseña es correcta
// Asociar el userID a los datos de la sesión
 req.session.userID = row.id; // solo el id del usuario registrado
// Preparar los datos a enviar al navegador (AngularJS)
var data = {
 id: row.id,
 login: row.login,
 name: row.name,
 email: row.email
 };
// enviar en la respuesta serializado en formato JSON
 res.json(data);
 } else {
// La contraseña no es correcta -> enviar este otro mensaje
 res.json({ errormsg: 'Fallo de autenticación'});
 }
 }
);