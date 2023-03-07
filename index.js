// 1. Inserta 4 items más con el texto 3, 4, 5 y 6 
//    respectivamente dentro del contenedor.

// const div1 = document.createElement("div")
// div1.textContent = 3
// document.querySelector(".container").appendChild(div1)

// const div2 = document.createElement("div")
// div2.textContent = 4
// document.querySelector(".container").appendChild(div2)

// const div3 = document.createElement("div")
// div3.textContent = 5
// document.querySelector(".container").appendChild(div3)

// const div4 = document.createElement("div")
// div4.textContent = 6
// document.querySelector(".container").appendChild(div4)

// // 2. Agrégales a todos los items la clase error
// const items = document.querySelectorAll(".item")
// items.forEach(e => e.classList.add("error"))

// // 3. Agrégale el texto "2" al círculo
// document.querySelector(".circle").textContent = 2

// // 4. Elimina el párrafo
// const parrafo = document.querySelector("p")
// parrafo.parentNode.removeChild(parrafo)

// for(let i = 3; i < 7; i++){
//     const container = document.querySelector(".container")
//     const div = document.createElement("div")
//     div.textContent = i
//     div.classList.add("item")
//     container.appendChild(div)
// }

// const evento = document.querySelector("#append")
// evento.addEventListener("click", function(){
//   const container = document.querySelector(".squares")
//   const cuadro = document.createElement("div")
//   cuadro.classList.add("square")
//   container.appendChild(cuadro)
// })

// const borrar = document.querySelector(".squares")
// borrar.addEventListener("mouseenter", function(){
//     const borro = document.querySelector(".square")
//     borro.parentNode.removeChild(borro)

// })

const json = `[
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
  ]`;

const obj = JSON.parse(json) // convierto el JSON a objeto
const table = document.querySelector("table")
const aparecer = document.querySelector("button") // evento para hacer click y mostrar la tabla
aparecer.addEventListener("click", function(){
    table.classList.remove("hide") //elimino la clase
})

for(let i in obj){
    const ciudad = obj[i]
    const tr = document.createElement("tr")
    tr.innerHTML = `<td><img src="${ciudad.flag_url}" alt= "${ciudad.name}"></td>
    <td>${ciudad.code}</td>
    <td>${ciudad.name}</td>
    `
    table.appendChild(tr)
}

const prueba = document.createElement("div")
prueba.innerHTML = `<h1>esta es una prueba<h1/>`
document.querySelector("body").appendChild(prueba)


// for(let i in obj){ // mi codigo pero no lee los link html
//     const tablaGeneral = document.querySelector("table")
//     const fila = document.createElement("tr")
//     tablaGeneral.appendChild(fila)
//     const flag = document.createElement("td")
//     flag.textContent = obj[i].flag_url
//     fila.appendChild(flag)
    
//     const code = document.createElement("td")
//     code.textContent = obj[i].code
//     fila.appendChild(code)

//     const name = document.createElement("td")
//     name.textContent = obj[i].name
//     fila.appendChild(name)
// }

