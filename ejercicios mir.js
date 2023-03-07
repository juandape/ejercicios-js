/*
//calcula IMC
const peso = parseInt(prompt ("cuanto pesas? "))
const altura = parseFloat(prompt ("cuanto mides? "))
const IMC = peso / Math.pow(altura, 2)

console.log("Tu IMC es: " + IMC)

//compara numero si es mayo, menor o igual a 10
const num = parseInt(prompt("Digita un número"))
if(num > 10){
  console.log("El numero es mayor que 10")
}else if(num === 10){
  console.log("El numero es igual a 10")
}else{
  console.log("El numero es menor que 10")
}


//adivina el numero aleatorio(1 vez)
const num = parseInt(prompt("Digita un número entre 1 y 10"))

const numAleatorio = Math.floor(Math.random()*10)
console.log(numAleatorio)
if(num === numAleatorio){
  console.log("Adivinaste")
}else{
  console.log("Sorry. Intenta nuevamente")
}


//retorna si el numero es multiplo de 5
const num = parseInt(prompt("Digita un número"))

if(num%5 === 0){
  console.log("El numero " + num +" es multiplo de 5")
}else{
  console.log("El numero " + num +" NO es multiplo de 5")
}


//define tu IMC con condicional
const peso = parseInt(prompt ("cuanto pesas? "))
const altura = parseFloat(prompt ("cuanto mides? "))
const IMC = peso / Math.pow(altura, 2)

console.log("Tu IMC es: " + IMC + ", estas: ")
if(IMC < 18.5){
  console.log("Bajo de Peso")
} else if(IMC >= 18.5 && IMC < 24.9){
  console.log("Normal")
} else if(IMC >= 25 && IMC < 29.9){
  console.log("Sobrepeso")
}else if(IMC >= 30){
  console.log("Obeso")
}


//numero bing y bong
const num = parseInt(prompt("Digita un número"))

if(num % 3 === 0 && num % 5 === 0){
  console.log("bingbong")
}else if(num % 5 === 0){
  console.log("bong")
}else if(num % 3 === 0){
  console.log("bing")
}else{
  console.log(num)
}

//imprime una frase el numero de veces que escriba el usuario
const frase = prompt ("Digita una frase")
const num = parseInt(prompt("Digita un numero"))
for (let i = 1; i <= num; i++){
  console.log(frase, i)
}

//imprime en numero desde el uno hasta el que digite el usuario
const num =parseInt(prompt("Digita un numero"))

for(i=1; i<= num; i++){
  console.log(i)
}


//suma los numeros desde el 1 hasta el que digite el usuari0
const num =parseInt(prompt("Digita un numero"))

let suma = 0
for(i=1; i<= num; i++){
  suma = suma +i
}
  console.log("La suma es: " + suma)

//imprime los numeros desde el primer numero hasta el segundo
const num1 =parseInt(prompt("Digita el primer numero"))
const num2 =parseInt(prompt("Digita segundo numero"))

for(i=num1; i<= num2; i++){
  console.log(i)
}

//adivina el numero aleatorio(hasta que lo adivine)
let num = parseInt(prompt("Digita un número entre 1 y 10 y Adivina"))
let numAleatorio
while(num !== numAleatorio){
  numAleatorio = Math.floor(Math.random()*11)
  console.log(numAleatorio)
  num = parseInt(prompt("Sorry. Intenta nuevamente"))
}

console.log("Yujuuuu!!!  Adivinaste!!!!. El numero era: " + numAleatorio)

//ingresa un nombre al final y cambia el de la posicion [2]
let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]
console.log(nombres)
const nuevoNombre = prompt("ingresa un nombre")
const nuevoNombre2 = prompt("ingresa otro nombre")
nombres.push(nuevoNombre)
nombres[2] = nuevoNombre2
for(let names of nombres){
console.log(names)
}

// crea un arreglo y elimina el elemento de la posicion [1]
const num = parseInt(prompt("Digita un número"))
let arr = []
for(i = 1 ; i <= num; i++){
  arr.push(i)
}
console.log(arr)

arr.splice(1,1)
console.log(arr)

for(let recorre of arr){
  console.log(recorre)
}

//imprime los numeros mayores que 10
const nums = [12,15,1,2,3,4,5,78,90,23,45]

for(let i = 0; i < nums.length; i++){
  if(nums[i] > 10){
    console.log(nums[i])
  }
}


//suma los 1
const nums = [1, 0, 1, 1, 1, 0, 1, 1, 1,0,1,0,1,1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]

let suma = 0
for(let i = 0; i < nums.length; i++){
  if(nums[i] === 1){
    suma = suma + nums[i]
  }
}

console.log (suma)


//imprime la matriz con numero de grupo y espacios
const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];


for(let i = 0; i < mat.length; i++){
  console.log(`Grupo ${i + 1}`) //console.log("Grupo", i + 1)
  for(let mats of mat[i]){
    console.log("  ", mats) //console.log(`  ${mats}`)
}
}


//imprime la frase en mayuscula
let frase = prompt("Digita una frase")
console.log(frase.toUpperCase())


//cuenta las "a" dentro de una frase
let frase = prompt("Digita una frase")
let frase2 = frase.split("")
console.log(frase2)
let suma =[]
for(let i = 0; i< frase2.length; i++){
  if(frase2[i] === "a"){
    suma.push(frase2[i])
  }  
}
console.log(`Hay ${suma.length} "a" en la frase `)

//cambia letras por numeros en una frase y les quita los espacios en blanco
let frase = prompt("Digita una frase")
let frase2 =frase.replaceAll(" ","").toLowerCase().split("")
console.log(frase2)

for(let i= 0; i < frase2.length; i++){
  switch(frase2[i]){
    case "a":
      frase2[i] = 4
      break
    case "e":
      frase2[i] = 3
      break
    case "i":
      frase2[i] = 1
      break
    case "o":
      frase2[i] = 0
    break
  }
//console.log(frase2[i])
}

console.log(frase2.join(""))


//mayuscula en primera letra de cada palabra de una frase
let frase = prompt("Digita una frase")
let frase2 = frase.split(" ")
for (let i = 0; i < frase2.length; i++) {
    frase2[i] = frase2[i][0].toUpperCase() + frase2[i].substr(1);
}

console.log(frase2.join(" "))

//digita una frase y la imprime cada palabra en una nueva linea
const frase = prompt("Digita una frase")

frase2 = frase.split(" ")
console.log(frase2)
for (let i = 0; i < frase2.length; i++){
  console.log(frase2[i])
}


//compara caracteres en comun de dos frases
let frase1 = prompt("Digita la primera frase")
let frase2 = prompt("Digita la segunda frase")

frase1 = frase1.replaceAll(" ","")//quitamos espacios vacios
console.log(frase1)
let acumula = []

//crea un array con los caracteres separados sin espacio en la variable acumula
for(let i = 0;  i < frase1.length;  i++){
  if(!acumula.includes(frase1[i])){ 
    acumula.push(frase1[i])
  }
}
  console.log(acumula)

const caracteresRep = []

for(let i = 0;  i < frase2.length;  i++){
  if(acumula.includes(frase2[i])){ 
    caracteresRep.push(frase2[i])
  }
}

console.log(caracteresRep)

if(caracteresRep.length === 0){
  console.log("No se encontraron caracteres en común")
}else{
  console.log(`Los caracteres en común son: ${caracteresRep}`)
}


//funcion suma
function suma(num1, num2){
  let suma = num1 + num2
  return suma
}

console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168

//funcion hola
function hola(nombre){
  return `Hola ${nombre}!`
}

console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"

// funcion IMC
function imc(peso, altura){
  const IMC = peso / Math.pow(altura, 2)

  if(IMC < 18.5){
  return `Tu IMC es: ${IMC}, Tu condición es: Bajo de peso`
} else if(IMC >= 18.5 && IMC < 24.9){
  return `Tu IMC es: ${IMC}, Tu condición es: Normal`
} else if(IMC >= 25 && IMC < 29.9){
  return `Tu IMC es: ${IMC}, Tu condición es: Sobrepeso`
}else if(IMC >= 30){
  return `Tu IMC es: ${IMC}, Tu condición es: Obeso`
}
}

console.log(imc(65, 1.8)) // 20.061728395061728
console.log(imc(72, 1.6)) // 28.124999999999993
console.log(imc(52, 1.75)) //  16.979591836734695

// función calcularColor
function calcularColor(num) {
  let color =""
  if (num === 1) {
    color = "negro";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "azul";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}

// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"

// funcion capitalizar
function capitalizar(frase){
  let frase2 = frase.split(" ")
  for (let i = 0; i < frase2.length; i++) {
    frase2[i] = frase2[i][0].toUpperCase() + frase2[i].substr(1);
  }

return frase2.join(" ")
}

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"

// funcion promedio
function promedio(array){
  let prom = 0
  for (let i = 0; i < array.length; i++){
    prom = (prom + array[i])
  }
  return prom / array.length
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200

// objeto pedro
const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"]
}

console.log(`La edad de pedro es: ${pedro.edad}`) //imprime el valor edad
pedro.estatura = 1.8 //añade la llave estatura con valor 1.8
delete pedro.activo //elimina la llave activo

//recorre el objeto e imprime en pantalla
const pedro1 = Object.keys(pedro)
for(let recorre = 0; recorre < pedro1.length; recorre ++){
  const key = pedro1[recorre]
  console.log(`${pedro1[recorre]} : ${pedro[key]}`)
}


// funcion saludar
function saludar(name){
  if(name.nombre && name.edad){
  return `Hola ${name.nombre}. Tienes ${name.edad} años`
  }else{
    return `Hola ${name.nombre}`
    }
  }

const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"

// funcion IMC con objeto
const persona = {
  nombre: "Juan",
  peso: 65,
  altura: 1.8,
  bmi : function bmi(peso, altura){
  const IMC = persona.peso / Math.pow(persona.altura, 2)
  if(IMC < 18.5){
  return `Tu IMC es: ${IMC}, Tu condición es: Bajo de peso`
} else if(IMC >= 18.5 && IMC < 24.9){
  return `Tu IMC es: ${IMC}, Tu condición es: Normal`
} else if(IMC >= 25 && IMC < 29.9){
  return `Tu IMC es: ${IMC}, Tu condición es: Sobrepeso`
}else if(IMC >= 30){
  return `Tu IMC es: ${IMC}, Tu condición es: Obeso`
}
}
}

console.log(`Hola ${persona.nombre}. ${persona.bmi()}`); // 20.061728395061728

// funcion buscar producto



function buscarProducto (array, num){
for(i= 0; i<array.length; i++){
  if(array[i].id === num){
    return array[i]
  }
  }
  return null
}


let productos = [
  { id: 1, nombre: "A" },
  { id: 2, nombre: "B" },
];

console.log(buscarProducto(productos, 1)); // { id: 1, nombre: "A" }

productos = [
  { id: 1, nombre: "A" },
  { id: 2, nombre: "B" },
];
console.log(buscarProducto(productos, 566)); // null

function descifrar(str, obj) {
    for(let i in obj){ //for in - itera en todo el objeto
      str = str.replaceAll(i, obj[i])
      
  }
  return str
}

console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"



// funcion frecuencias cuenta las letras de un string y devuelve un objeto
function frecuencias(frase) {
  frase = frase.replaceAll(" ","")// quita los espacios en blanco
  let obj ={}
  for(i = 0; i < frase.length; i++){
    const char = frase[i]
    if(obj[char]){
      obj[char]++
    }else{
      obj[char] = 1
    }
  }
  return obj
}
// código de prueba
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }


// metodo forEach para recorrer un arreglo
const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34]

const imprimir =function(val) {
  console.log(val)
}

arr.forEach(imprimir)


//funcion encontrar pares
function pares (arr) {
  return arr.filter(num => num %2 === 0)
  }

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []


//funcion posPares retorna nuevo arr con posiciones pares
function posPares(arr) {
  return arr.filter((num, index) => index %2 === 0)
}

// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []

//funcion multiplicar por segundo numero
function multiplicar(arr, num) {
    return arr.map(num2 => num2 * num)
}

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []

//funcion que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:
//forma1
function productosBaratos(arr) {
   return arr.filter(obj => obj.precio >= 5 && obj.precio <= 10).map(obj => obj.nombre);
  }

//forma2
function productosBaratos(pdto){
  return pdto.filter(function(pdtos){
    return pdtos.precio >= 5 && pdtos.precio <= 10
  }).map(function (pdtos) {
    return pdtos.nombre
  })
}

//forma mia
// function productosBaratos(arr) {
//   let arr2 = []
//   for(i in arr){
//     if(arr[i].precio >= 5 && arr[i].precio <= 10){
//       arr2.push(arr[i].nombre)
//     }
//   }
//   return arr2
// }

let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]


//funcion flecha
const hola = (name = "Pedro") => `Hola ${name}!`

console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!"

//destructuracion arrays
const arr = [1, 2, 3, 4]

// escribe acá tu respuesta
const [first, second] = arr
// código de prueba
console.log(first) // 1
console.log(second) // 2


//destructuracion objetos
const person = {
  name: "Pedro",
  age: 20
}

// escribe tu respuesta acá
const {name, age} = person
// código de prueba
console.log(name) // "Pedro"
console.log(age) // 20

//objeto literal metodos concisos acelerar, frenar
const auto ={
  velocidad: 0,
  acelerar(){this.velocidad++},
  frenar(){this.velocidad--}
}

// código de prueba

console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0

//funcion flecha obtener impares
const obtenerImpares = (arr) => arr.filter(num => num % 2 !== 0)


// código de prueba
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27, 12])) // [35, 27]
console.log(obtenerImpares([])) // []

//funcion que recibe array y retorna el valor mayor
//solucion mia
function max(arr) {
  let arr2 = []
  for(i in arr){
    if(arr[i] > arr2){
      arr2 = arr[i]
    }
  }
  return arr2
}
//solucion 2
const max = (arrNums) => {
  const maxNum = arrNums.reduce((maxN, num) => {
    return num > maxN ? num : maxN
  }, 0)
  
  return maxNum
}

// código de prueba
console.log(max([1, 2, 3, 4])) // 4
console.log(max([63, 85, 39, 24, 3])) // 85



//funcion que recibe numero indeterminado de argumentos y devuelve el mayor
//con mi solucion
function max(...arr) {
  let arr2 = []
  for(i in arr){
    if(arr[i] > arr2){
      arr2 = arr[i]
    }
  }
  return arr2
}

*/
//solucion 2
const max = (...arrNums) => {
  const maxNum = arrNums.reduce((maxN, num) => {
    return num > maxN ? num : maxN //condicional ternario if else
  }, 0)
  
  return maxNum
}


// código de prueba
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85