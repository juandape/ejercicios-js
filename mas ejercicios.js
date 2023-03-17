// console.log("mi programa de javaScript")
// console.log('mi programa de javaScript')
// console.log(`mi programa de javaScript`)
// console.log("mi " + "programa " + "de " + "javaScript")

// const nombre = "Juan"
// const edad = 46
// const residencia = "Colombia"

// console.log(`${nombre} tiene ${edad} años y vive en ${residencia}`)

// const num = Math.floor(Math.random()*20)
// num > 10 ? console.log(`El numero ${num} es mayor que 10`) : console.log(`El numero ${num} es menor que 10`)

// const num2 = Math.floor(Math.random()*10)
// num2 === 8 ? console.log(`El numero ${num2} es igual 8`) : console.log(`El numero ${num2} no es 8`)

// const time = 19

// if (time < 12){
//     console.log(`Buenos dias!! son las ${time}`)
// }else if(time >=12 && time <=18){
//     console.log(`Buenas tardes!! son las ${time}`)
// }else{
//     console.log(`Buenas noches!! son las ${time}`)
// }

// const name = "Ped"

// if(name === "Pedro" || name === "Maria" ){
//     console.log("Esta Listo")
// }

// for(i = 1; i<=50; i++){
//     console.log(i, "Estoy Aprendiendo")
// }

// let n = 1
// while (n <=5 ) {
//     console.log("Hola desde el cuerpo del ciclo");
//     n++;
//   }

//   while (false) {
//     console.log("Hola desde el cuerpo del ciclo");
//   }

//   let r = 0
//   while (r < 2) {
//     console.log("Hola desde el cuerpo del ciclo");
//     r++
// }

// for(r = 0; r < 2; r++){
//     console.log("Hola desde el cuerpo del ciclo2");
// }

// for (i=1; i<=5; i++){
//     console.log(i, "Estoy Aprendiendo javaScript")
// }

// let t= 0
// while (t < 5) {
//     console.log("Estoy Aprendiendo javaScript")
//     t++
// }

// function greetings(nombre, apellido){
//     return `Mi nombre es ${nombre} y mi apellido es ${apellido}`
// }

// console.log(greetings("Nayib", "Abdalá"));
// console.log(greetings("Germán", "Escobar"));
// console.log(greetings("Simón", "Hoyos"));

// function sum(num1, num2){
//     return num1 + num2
// }

// console.log(sum(10, 20));  // 30
// console.log(sum(10, 10));  // 20
// console.log(sum(40, 60));  // 100
// console.log(sum(50, 200));  // 250

// function sayMyName(name) {
//     return ("Tu nombre es " + name)
//   }

//   const name = "Nayib";
//   console.log(sayMyName(name));

// const arr = ["Simón", "Natalia", "Nayib", "Diana", "Germán"]

// for(let i in arr){
//     console.log(arr[i])
// }

// function retornaElementos(array, index1, index2){
//     const arr2 = []
//     arr2.push(array[index1], array[index2])
//     return `los elementos a imprimir son ${arr2[0]} y ${arr2[1]}`
// }

// console.log(retornaElementos([1, 2, 3, 4, 5], 1, 3))

// const arr = ["Primero", "Segundo", "Tercero", "Cuarto"]
// arr.push("Soy el ultimo elemento")

// const newArray = ["Quinto", "Sexto"];

// arr.splice(4,0,newArray[0],newArray[1])

// for(let i in arr){
// console.log(arr[i])
// }

// const ages = [12, 3, 5, 44, 18, 2, 55, 26];

// for(let i in ages){
//     const array = []
//     if(ages[i] >= 18){
//         console.log(ages[i])
//     }
// }

// console.log("Hola mundo"[3]) // a
// console.log("    "[2]); // " "
// console.log("Estoy aprendiendo"[7]); // p
// console.log("El azul es mi color favorito"[12]); // i
// console.log(""[0]); //undefined
// console.log(" El cielo es azul"[20]); // undefined

//contar elementos de un string
// function countingEs(string){
//     let counter = 0
//     for(let i in string){
//         if (string[i] === "e"){
//             counter++
//         }
//     }
//     return counter
// }

// console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
// console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
// console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
// console.log(countingEs("Ahora qué?") === 0); // true
// console.log(countingEs("Los elefantes son enormes") === 5) // true

// function message(array){
//     return array.join(" ")
// }

// console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
// console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
// console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil

// contraseña
// function contrasena(string){
//     let string2 = string.toLowerCase().replaceAll(" ","").split("")
//     for(let i in string2){
//         switch(string2[i]){
//             case "a":
//                 string2[i] = 4
//                 break;
//             case "e":
//                 string2[i] = 3
//                 break;
//             case "i":
//                 string2[i] = 1
//                 break;
//             case "o":
//                 string2[i] = 0
//                 break;
//         }
//     }
//     return string2.join("")
// }

// console.log(contrasena("hola")); // "h0l4"
// console.log(contrasena("esta es una prueba")); // "3st43sun4pru3b4"
// console.log(contrasena("")); // ""

// capitalizar primera letra de cada palabra de un string
// function capitalize(string){
//    let word = string.split(" ")
//    for(let i in word){
//     word[i]= word[i][0].toUpperCase() + word[i].substr(1)
//    }
//    return word.join(" ")
// }

// console.log(capitalize("pedro perez")); // "Pedro Perez"
// console.log(capitalize("make it real")); // "Make It Real"

// let recipe = {
//     "Leche en polvo": "1 litro",
//     "Chocolate en barra": "3 barras",
//     azucar: "3 gramos"
// }

// for (let key in recipe) {
//     if (recipe.hasOwnProperty(key)) {
//       console.log("Agrega " + recipe[key] + " de " + key);
//     }
//   }

// recipe.mixIngredients = function (){
//     return "Mezclando los ingredientes..."
// }

// console.log(recipe.mixIngredients())

// agrega un numero al final de un array
// function agrega(array, num){
//     arr2 = []
//     for (let i in array){
//         arr2.push(array[i])
//     }
//     arr2.push(num)
//     return arr2
// }

// function agrega(array, num){
//     return [...array, num]
// }

// console.log(agrega([1, 2, 3, 4], 5))
// console.log(agrega([2, 4, 6, 8], 10))

// Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };

//  console.log(recordCollection[2548].artist)

//   If prop isn't tracks and value isn't an empty string, update or set that album's prop to value. ok
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it. ok
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
//   console.log(Object.keys(recordCollection))

//   function updateRecords(records, id, prop, value) {
//         if(prop !== "tracks" && value !== ""){
//            records[id][prop] = value
//         }else if(prop === "tracks" && records[id][prop] === undefined){
//             records[id][prop] = [value]
//         } else if(prop === "tracks" && value !== ""){
//             records[id][prop].push(value)
//         }else if(value === ""){
//             delete records[id][prop]
//         }

//     return records;
//   }

// // console.log(updateRecords())

// // console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// // console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))
// // console.log(updateRecords(recordCollection, 2548, "artist", ""))
// // console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"))
// // console.log(updateRecords(recordCollection, 2468, "tracks", "Free"))
// // console.log(updateRecords(recordCollection, 2548, "tracks", ""))
// console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"))

// const myArray = [];

// // Only change code below this line
// let i = 5

// while(i>=0){
//   myArray.push(i)
//   i--
// }

// console.log(myArray)

// function multiplyAll(arr) {
//     let product = 1;
// Only change code below this line
//   for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         product = product * arr[i][j]
//     }
//   }
//     // Only change code above this line
//     return product;
//   }

//   console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

//   function lookUpProfile(name, prop) {
//     for (let i in contacts){
//         if(contacts[i].firstName === name && contacts[i][prop] === undefined){
//             return `No such property`
//         }else if(contacts[i].firstName === name){
//             return contacts[i][prop]
//         }
//     }
//     return `No such contact`
//   }
// //   console.log(lookUpProfile())

// console.log(lookUpProfile("Akira", "likes"))
// console.log(lookUpProfile("Kristian", "lastName")) //should return the string Vos
// console.log(lookUpProfile("Sherlock", "likes")) //should return ["Intriguing Cases", "Violin"]
// console.log(lookUpProfile("Harry", "likes")) //should return an array
// console.log(lookUpProfile("Bob", "number")) //should return the string No such contact
// console.log(lookUpProfile("Bob", "potato")) //should return the string No such contact
// console.log(lookUpProfile("Akira", "address"))// should return the string No such property

// function randomRange(myMin, myMax) { //crea un numero aleatorio dentro de un rango

//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
//     //                                   10        6       +   4
//   }

//   console.log(randomRange(5, 10))

// function countdown(n){  //recursion - uso de la funcion en si misma sin loops
//     if(n < 1){
//       return []
//     }
//     else {
//       let arr = countdown(n-1)
//       arr.unshift(n)
//       return arr;
//     }
//   }

//   console.log(countdown(-1))
//   console.log(countdown(10))
//   console.log(countdown(5))

// otro ejemplo de recursion: We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with a
// number represented by the startNum parameter and ends with a number
// represented by the endNum parameter. The starting number will always
// be less than or equal to the ending number. Your function must use
// recursion by calling itself and not use loops of any kind.
// It should also work for cases where both startNum and endNum are the same.

// function rangeOfNumbers(startNum, endNum) {
//   if(endNum < startNum){
//     return []
//   } else{
//     const numbers = rangeOfNumbers(startNum, endNum-1)
//     numbers.push(endNum)
//     return numbers
//   }
// };

// console.log(rangeOfNumbers(1, 5))
// console.log(rangeOfNumbers(6, 9))
// console.log(rangeOfNumbers(4, 4))

// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//     s.splice(0,3,2,5,7)
//   // Using s = [2, 5, 7] would be invalid
// return s
//   // Only change code above this line
// }
// console.log(editInPlace());

// //reduce
// const arr = [1,2,3,4,5]

// const valorInicial = 0
// const sumRed = arr.reduce((acc, currentVal) => acc + currentVal, valorInicial)
// console.log(sumRed)

// console.log(...arr)

//copiar un array en otro con spread
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];

// console.log(arr2);

// destructuring
// cambiar el valor de las variables con destructuring
// let a = 8, b = 6;
// // Only change code below this line

// [b, a] = [a, b]

// console.log(a,b)

// function removeFirstTwo(list) { //funcion que retorna un array sin los dos primeros parametros con destructuring
//   // Only change code below this line
//   const [a, b, ...shorterList] = list
//   // Only change code above this line
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(sourceWithoutFirstTwo)

// Use destructuring assignment within the argument to the
// function half to send only max and min inside the function.

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = ({max, min}) => (max + min) /2
// // Only change code above this line

//funcion que suma y retorna el valor mayor entre los arrays
// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// const maximumWealth = function(accounts) {
//   let valInit = 0
//   let max =[]
//   for(let i in accounts){
//       max.push(accounts[i].reduce((acc, currentVal) => acc + currentVal, valInit))
//     }
//   return Math.max(...max)
// };

// console.log(maximumWealth([[1,2,3],[3,2,1]]))
// console.log(maximumWealth([[1,5],[7,3],[3,5]]))

//Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// function fizzBuzz (n) {
//   const arr = []
//   for (let i = 1; i <= n; i++){
//     arr.push(i)
//   }
//   for (let i in arr){
//     if (arr[i] % 3 === 0 && arr[i] % 5 === 0 ){
//       arr[i] = "FizzBuzz"
//     }else if(arr[i] % 3 === 0){
//       arr[i] = "Fizz"
//     } else if(arr[i] % 5 === 0){
//       arr[i] = "Buzz"
//     }else if(arr[i] === arr[i]){
//       arr[i] = arr[i].toString()
//     }
//   }
//   return arr
// }

// console.log(fizzBuzz(15))

// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

//example
// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

// function numberOfSteps(num) {
//     let acum = num
//     let contador = 0
//     if(acum === 0){
//       return 0
//     }
//     do{
//     if(acum % 2 === 0){
//       acum = acum / 2
//     } else if(acum % 2 !== 0){
//       acum = acum - 1
//     }
//     contador++
//   } while(acum > 0)
//   return contador
// }

// console.log(numberOfSteps(0))

// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (let i in arr){
//   failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
//   // Only change code above this line
//   }
//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList)

// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.

// class Thermostat {
//   constructor(fahrenheit) {
//     this._fahrenheit = fahrenheit;
//   }

//   get temperature() {
//     return (5 / 9) * (this._fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     this._fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".

// function reverseString(str) {
//   let str1 = str.split("").reverse().join("")
//   return str1;
// }

// console.log(reverseString("hello"));

// Return the factorial of the provided integer.

// function factorialize(num) {
//   let acum = 1
//   for(let i = 1; i <= num; i++){
//     acum = acum * i
//   }
//   return acum;
// }

// console.log(factorialize(5));

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//   let str1 = str.split(" ")
//   let maxLength = 0
//   let longestWord = ''
//   for (let i in str1){
//     if(str1[i].length > maxLength){
//       maxLength = str1[i].length
//       console.log(maxLength, str1[i])
//       longestWord = str1[i]
//     }

//   }

//   return `The longest word is ${longestWord} and it has ${maxLength} letters`;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function largestOfFour(arr) {
//   let arr1 = []
//   let larguest = arr[0]
//   for(let i in arr){
//     if(arr[i] > larguest){
//       larguest = arr[i]
//       // console.log(larguest, i)
//     }
//   }
//   arr1.push(larguest)
//   return arr1;
//   }
//   console.log(largestOfFour([4, 5, 1, 3]))
//   console.log(largestOfFour([-72, -3, -17, -10]))

// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each
//  with array syntax arr[i].

// function largestOfFour(arr) {
//   let arr1 = []
//   for(let i in arr){
//     let largest = arr[i][0]
//     for (let j in arr[i]){
//       if(arr[i][j] > largest){
//       largest = arr[i][j]
//       }
//     }
//     arr1.push(largest)
//   }
//   return arr1;
//   }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge,
// we would like you to use one of the JavaScript substring methods instead.

// forma 1
// function confirmEnding1(str, target) {
//   if(str.endsWith(target)){
//   return `${str} termina en ${target}`;
//   }
// }
// console.log(confirmEnding1("Bastian", "n"));

// forma2
// function confirmEnding(str, target) {
//     const str2 = str.substring(str.length - target.length);
//     return str2 === target
// }
// console.log(confirmEnding("Bastian", "ian"));

// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

// function repeatStringNumTimes(str, num) {
//   let str2 = ""
//   if(num > 0){
//   for(let i = 0; i < num; i++){
//     // str2 = str.concat("", str2) otra forma
//     str2 = str2 + str
//   }
// }else if(num <= 0){
//   return ""
// }
// return str2;
// }
// console.log(repeatStringNumTimes("abc", 3));
// console.log(repeatStringNumTimes("*", 3))
// console.log(repeatStringNumTimes("abc", 4))
// console.log(repeatStringNumTimes("abc", 1))
// console.log(repeatStringNumTimes("*", 8))
// console.log(repeatStringNumTimes("abc", -2))
// console.log(repeatStringNumTimes("abc", 0))

// Truncate a string (first argument) if it is longer than
// the given maximum string length (second argument).
// Return the truncated string with a ... ending.

// function truncateString(str, num) {
//     console.log(str.length)
//     if(str.length > num){
//     let trunc = str.slice(0, num)
//     return `${trunc}...`
//     }else{
//       return str
//     }
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //A-tisket...
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))

// Create a function that looks through an array arr and returns the first element
// in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

// function findElement(arr, func) {
//   let num = 0;
//   for(let i in arr){
//     num = func(arr[i])
//     if(num === true){
//       return arr[i]
//     }
//   }
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // should return 8.
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // should return undefined.

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

// function booWho(bool) {
//   if(bool === true || bool === false){
//     return true
//   }
//   return false
// }

// console.log(booWho(null));

//capitalize each first word of the string

// function titleCase(str) {
//   let str2 = str.toLowerCase().split(" ")
//   let word = []
//   // console.log(str2)
//   for(let i in str2){
//     // console.log(str2[i])
//       word.push(str2[i][0].toUpperCase() + str2[i].slice(1))
//       // console.log(str2[i][j])
//   }
//   return word.join(" ")
// }

// console.log(titleCase("I'm a little tea pot"));

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//  const arr3 = []
//  for(let i in arr2){
//   arr3.push(arr2[i])
//  }
//   for (let i=arr1.length-1; i>=0; i--){ //recorro el array en reversa
//   // console.log(arr1[i])
//   arr3.splice(n, 0, arr1[i])

// }
//   return arr3;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1))

// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//   const arr2 = []
//   const arr3 =[]
//   for(let i in arr){
//     arr2.push(arr[i])
//     }
//     // console.log(arr2)
//   for(let i in arr2){
//     if(Boolean(arr2[i])){
//       arr3.push(arr2[i])

//     }
//   }

//   return arr3;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

// Return the lowest index at which a value (second argument) should be inserted into
// an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
// but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
// been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//   arr.push(num)
//   arr.sort((a, b) => a - b) // ordena de mayor a menor un array
//   console.log(arr)
//   for(let i in arr){
//     if (num === arr[i]){
//       return parseInt(i)
//     }
//   }
// }

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
// console.log(getIndexToIns([1,2,3,4], 1.5))
// console.log(getIndexToIns([3, 10, 5], 3)) //should return 0.
// console.log(getIndexToIns([5, 3, 20, 3], 5))// should return 2.
// console.log(getIndexToIns([2, 20, 10], 19)) //should return 2.
// console.log(getIndexToIns([2, 5, 10], 15)) //should return 3

// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters
// in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// function mutation(arr) {
//   const firstEl = arr[0].toLowerCase().split("")
//   const secondEl = arr[1].toLowerCase().split("")
//   console.log(firstEl, secondEl)
//   for(let i in secondEl){
//     if(firstEl.indexOf(secondEl[i]) < 0){
//        return false
//       }
//     }
//       return true
//   }

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // should return true.
// console.log(mutation(["Mary", "Army"])) //should return true
// console.log(mutation(["Mary", "Aarmy"])) //should return true.
// console.log(mutation(["Alien", "line"])) //should return true.
// console.log(mutation(["floor", "for"])) //should return true.
// console.log(mutation(["ate", "date"])) //should return false.
// console.log(mutation(["Noel", "Ole"])) //should return true.

// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//   const result = []
//   for(let i = 0; i < arr.length; i = i + size){
//     let arr1 = arr.slice(i, i + size)
//     result.push(arr1)
//   }

//   return result
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //should return [["a", "b"], ["c", "d"]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// function isValid(s) {
//     const simbolos = {
//       "{": "}",
//       "(": ")",
//       "[": "]"
//     }

//       if(s.length % 2 !== 0){
//       return false
//     } else if(Object.values(simbolos).includes(s[0])){ //selecciona el primer caracter
//               //s[0] === ")" || s[0] === "}" || s[0] === "]"
//       return false
//     } else if(Object.keys(simbolos).includes(s[s.length-1])){ //selecciona el ultimo caracter
//             // s[s.length-1] === "(" || s[s.length-1] === "{" || s[s.length-1] === "["
//       return false
//     }

//     let acum = []
//     for(let i in s){
//       if(Object.keys(simbolos).includes(s[i])){
//         // s[i] === "(" || s[i] === "{" || s[i] === "["
//         acum.push(s[i])
//       } else if(simbolos[acum.pop()] !== s[i]){
//           return false
//       }
//     }
//     if (acum.length === 0){
//       return true
//     }
//     return false
//   }

// console.log(isValid("(([]")) //false
// console.log(isValid("(([]){})")) //true
// console.log(isValid("([)]")) //false
// console.log(isValid("((")) //false
// console.log(isValid("[[[]")) //false

//roman to integer

// function romanToInt(s){
// const romanos = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// }

// const s1 = s.split("")
// let acum = 0
// const romanos2 = Object.keys(romanos)

// for (let i in romanos2){
//   for (let j in s1){
//      if(s1[j] === romanos2[i]){
//         acum += romanos[s1[j]]
//        }
//     }

//   }

// if(s.includes("IV")){
//   acum -= 2
// }
// if(s.includes("IX")){
//   acum -= 2
// }

// if(s.includes("XL")){
//   acum -= 20
// }
// if(s.includes("XC")){
//   acum -= 20
// }

// if(s.includes("CD")){
//   acum -= 200
// }

// if(s.includes("CM")){
//   acum -= 200
// }

// return acum
// }

// console.log(romanToInt("III")) //3
// console.log(romanToInt("LVIII")) //58
// console.log(romanToInt("MCMXCIV")) //1994
// console.log(romanToInt("X")) //10
// console.log(romanToInt("XXVII")) //27
// console.log(romanToInt("XIV")) //14
// console.log(romanToInt("MCMXCIV")) // 1994
// console.log(romanToInt("MMXXIII")) // 2023
// console.log(romanToInt("MDCCCXXXIV")) // 1834

// two sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// function twoSum(nums, target) {
//     const array = []

//     for (let i = 0; i<nums.length; i++){
//       for (j = 1; j<nums.length; j++){
//         if(nums[i]+nums[j] === target && i !== j){
//            array.push(i, j)
//            return array
//           }
//       }
//     }

// };

// console.log(twoSum([2,7,11,15], 9)) // [0,1]
// console.log(twoSum([3,2,4], 6)) //[1,2]
// console.log(twoSum([3,3], 6)) //[0,1]
// console.log(twoSum([2,5,5,11], 10)) //[1,2]

// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// function longestCommonPrefix(strs) {
//   let prefix = strs[0];
//   let i = 1
//   while(i < strs.length){
//     if(!strs[i].startsWith(prefix)){
//       prefix = prefix.slice(0, -1)
//     }else{
//       i++
//     }
//   }
//     return prefix;
//   }

// console.log(longestCommonPrefix(["flower","flow","flight"])) // fl
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
// console.log(longestCommonPrefix(["a"])) // "a"
// console.log(longestCommonPrefix(["reflower","flow","flight"])) // ""
// console.log(longestCommonPrefix(["",""]))
// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); // flower

// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// function isPalindrome(x) {
//   let xx = x.toString();
//   let x1 = xx.split("").reverse();
//   let back = x1.join("");
//   if (xx === back) {
//     return true;
//   }
//   return false;
// }

// console.log(isPalindrome("casac")); //true
// console.log(isPalindrome(-121)); //false
// console.log(isPalindrome(10)); //false
// console.log(isPalindrome(1221)); //true


// function mergeTwoLists (list1, list2){

//     let result = list1.concat(list2)
//     return result.sort()

// }

// function mergeTwoLists (list1, list2){
    
//     const arr = [...list1, ...list2]   
//     return arr.sort()

// }

// console.log(mergeTwoLists([1,2,4], [1,3,4]))
// console.log(mergeTwoLists([], []))
// console.log(mergeTwoLists([], [0]))
// console.log(mergeTwoLists())

// destructuring
// const arr = [1,2,3]
// const [a,b,c] = arr
// console.log(a)
// console.log(b)
// console.log(c)

// const suma = a+b
// console.log(`la suma es ${suma}`)

