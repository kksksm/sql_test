//librerias
const mysql = require('mysql');
const readline = require('readline');
const readlineSync = require('readline-sync');
//inicializacion
const SuperBienvenida = readlineSync.question("identifiquese:");
console.log("bienvenido", SuperBienvenida);
//declaracion de variables de enlace
const SuperHost = readlineSync.question("indique el host al que se desea conectar:");
const SuperUser = readlineSync.question("indique el usuario con el que se desea acceder:");
const SuperPort = readlineSync.question("introduzca el puerto de acceso para entrar :");
const SuberPassword = readlineSync.question("aguardando contraseña:");
//const SuperBase = readlineSync.question("indique el nombre de la base de datos a conectar:");
//variables de ataque
var SuperAtaque = undefined
var SuperBase  = undefined
const SuperLanzar = "SELECT * FROM ";
const SuperValues = " VALUES ";
const SuperCapturar = "SELECT ";
const SuperInsertar = "INSERT INTO ";
const SuperFrom = "FROM ";
const SuperWhere = "WHERE ";
const SuperMinar = "SHOW DATABASES LIKE '';";
//configuracion de columnas
function ConfiguracionColumnas()
{
SuperBase = readlineSync.question("indique el nombre de la base de datos a conectar:")
let SuperTablas = readlineSync.question("¿a que tabla desea conectarse?:")
var SeleccionarNumeroColumnas = readlineSync.question(" ¿cual es el NUMERO de columnas que existen en la tabla"+" "+ SuperTablas+"?  =>");
const SuperColumnas = [];
for (let i = 0; i < SeleccionarNumeroColumnas; i++){
  const SuperNombres = readlineSync.question('Ingrese el nombre de las columnas a las que desea insertar datos: ');
  SuperColumnas.push(SuperNombres);
}
  var SuperSeleccion = "(" + SuperColumnas.join(', ') + ")"
const OmegaInsertar = [];
for (i = 0; i < SeleccionarNumeroColumnas; i++){
   var SuperRegistro = readlineSync.question( "¿cuales son los nuevos registros para las columnas?" + " " + SuperSeleccion + "? :" );
   OmegaInsertar.push(SuperRegistro)
}
   var MegaRegistro = "(" + OmegaInsertar.map(value => `'${value}'`).join(', ') + ")"
   //console.log(SuperInsertar + SuperTablas + " " + SuperSeleccion + SuperValues + MegaRegistro + ";")
   var UltraRegistro = SuperInsertar +SuperTablas + " " + SuperSeleccion + SuperValues + MegaRegistro + ";";
   console.log(UltraRegistro);
   var UltraRegistro = SuperAtaque;
   return SuperInsertar + SuperTablas + " " + SuperSeleccion + SuperValues + MegaRegistro + ";"; 
}
//configuracion para extraer informacion en tablas
function SuperExtraer()
{
SuperBase = readlineSync.question("indique el nombre de la base de datos a conectar:");
let SuperTablas = readlineSync.question("¿a que tabla desea conectarse?:")
let OmegaExtraer = SuperLanzar + SuperTablas + ";" 
return OmegaExtraer
}
//configuracion para minar bases de datos
//Arbol de desiciones
console.log("  leyenda de acciones  ")
var insertar = console.log("        insertar        ")
var minar    = console.log("      󰠥    minar  󰠥       ")
var extraer  = console.log("        extraer         ")
var SuperOrden = readlineSync.question("¿que desea hacer?:")
if (SuperOrden === "insertar"){SuperAtaque = ConfiguracionColumnas()}
else if (SuperOrden === "extraer"){SuperAtaque = SuperExtraer()}
else if (SuperOrden === "minar"){SuperAtaque = SuperMinar}
else{console.log("adios")}
// conexion a base de datos
var mysqlconexion = mysql.createConnection({
  host:SuperHost,
  user:SuperUser,
  port:SuperPort,
  password:SuberPassword,
  database:SuperBase,
})
// verificacion de la conexion
mysqlconexion.connect(function(err){
  if (err){throw err;}else{
    console.log("conexion establecida con exito")
  }
})
mysqlconexion.query(SuperAtaque, (err,selection)=> {
  if (err){throw err;}
  else{console.log(selection)}
})
mysqlconexion.end()
