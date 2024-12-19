//librerias
const mysql = require('mysql');
const readline = require('readline')
const redline = require('readline');
const readlineSync = require('readline-sync');

//variables de sql
let sasa = "SELECT * FROM dorohedoro_data;";
let soso = "SELECT * FROM ALL_PLUGINS";
let susu = "SELECT * FROM CHARACTER_SETS";
let OrdenSuperiorSuperior
console.log("<-----indique la base de datos a atacar----->");
console.log("db_prueba")
console.log("information_schema")
console.log("<------------------------------------------->");
//estructura de ataque
const OrdenSuperior = readlineSync.question("aguardando por nombre de base de datos:")
if(OrdenSuperior == "db_prueba"){ OrdenSuperiorSuperior = sasa} 
else if (OrdenSuperior == "information_schema"){
  console.log("<------indique a que tabla se atacara------->")
  console.log("ALL_PLUGINS")
  console.log("CHARACTER_SETS")
  console.log('<------------------------------------------->')
  let ataque = readlineSync.question()
  if (ataque == "CHARACTER_SETS"){OrdenSuperiorSuperior = susu}else{
  OrdenSuperiorSuperior = soso}
}


//entrada del nombre del host
const SuperHost = readlineSync.question("ingrese el host: ")
console.log("el host es: ", SuperHost);

//entrada del user
const SuperUser = readlineSync.question("ingrese el user: ");
console.log('el user es: ', SuperUser);

//entrada de contraseñawait
const SuperPassword = readlineSync.question("ingrese la contraseña: ")
console.log("contraseña procesada");

//entrada a la base de datos
console.log("<-------------------------------------------->")
console.log("information_schema");
console.log("db_prueba");
console.log("<-------------------------------------------->")
//const SuperDb = readlineSync.question("ingrese el nombre de la base de datos: ")
console.log("conectando a ", OrdenSuperior);

//conexion a base de datos
const conexion = mysql.createConnection({
  host:SuperHost,
  user:SuperUser,
  password:SuperPassword,
  database:OrdenSuperior,
});

conexion.connect(function(err){
  if (err) {throw err;}else{
    console.log("conexion establecida")
  }
})

console.log("bienvenido señor Samir")
console.log("¿que desea hacer?")

//arbol de desiciones para interactuar con base de datos

const SuperDesicion = readlineSync.question("aguardando por ordenes: ")

if(SuperDesicion === "extraer datos"){
conexion.query(OrdenSuperiorSuperior, (err,usuarios)=> {
  if(err){
    throw err;}else{
      console.log(usuarios)
    }
  })
} else{ 
  console.log("Procesando nueva directiva", SuperDesicion)
}

if(SuperDesicion === "seleccion 0"){
  conexion.query(sasa, (err, seleccion) => {
    if (err){
      throw err;}
    else{
      const UsuarioUno = seleccion[0]
      console.log("en la seleccion 0 se ubica:", UsuarioUno)
    }
  })
}
conexion.end()
