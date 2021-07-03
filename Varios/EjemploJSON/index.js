// let username = 'Cristian'

// let edad = 25

// sessionStorage.setItem('username', username)

// sessionStorage.setItem('edad', edad)

// console.log(sessionStorage.getItem('username'))
// console.log(sessionStorage.getItem('edad'))


// let lenguajes = ['Javascript','Python','Java']

// sessionStorage.setItem('lenguajes', lenguajes)


// sessionStorage.removeItem('username')


// let usuario = {
//     username: 'Cristian',
//     edad: 25,
//     lenguajes: ['Javascript', 'Python', 'Java']
// }

// sessionStorage.setItem('user', usuario)


// for (let i = 0; i < sessionStorage.length; i++) {

//     let clave = sessionStorage.key(i)
//     let valor = sessionStorage.getItem(clave)
//     console.log("Clave: "+ clave)
//     console.log("Valor: "+ valor)

// }

// localStorage.clear()


// function multiplicar (a, b) {

//     return a * b

// }

// function guardarLocal (clave, valor) {

//     localStorage.setItem(clave, valor)

// }

// let ingresarNumero = Number(prompt("Ingresar Numero"))

// for (let i = 1; i <= 10; i++) {

//     guardarLocal(i, multiplicar(ingresarNumero, i))

// }



// let tablaDel8 = {}

// for (let i = 0; i < localStorage.length; i++) {

//     let clave = localStorage.key(i)

//     tablaDel8[clave] = Number(localStorage.getItem(clave))

// }

// console.log(tablaDel8)


// localStorage.setItem('user', JSON.stringify(usuario))

// let users = console.log(localStorage.getItem('user'))


// console.log(JSON.parse(localStorage.getItem('user')))


// saveInLocalStorage('tabla', usuario)

// let array = [1,2,3]

// saveInLocalStorage('pepito',array)

// console.log(getLocalStorage('pepito'))



//Ejemplo de guardar productos

// const products = [
//     { id: 1, producto: 'Arroz', precio: 125 },
//     { id: 2, producto: 'Fideo', precio: 70 },
//     { id: 3, producto: 'Pan', precio: 50 },
//     { id: 4, producto: 'Flan', precio: 100 }
// ]


// De esta manera se guardan de uno

// products.forEach(producto => {

//     saveInLocalStorage(producto.id, producto)

// })


//De esta manera se guardan juntos en un array

// saveInLocalStorage('listaProductos', products)


//Recuperando nuestros objetos del localStorage

// class Producto {

//     constructor(obj) {
//         this.nombre = obj.producto.toUpperCase()
//         this.precio = obj.precio
//     }

//     sumaIva() {
//         this.precio = this.precio * 1.21
//     }
// }


// const almacenados = getLocalStorage('listaProductos')
// const productos = []

// almacenados.forEach(producto => {
//     productos.push(new Producto(producto))
// })


// productos.forEach(producto => {

//     producto.sumaIva()

// })

// console.log(productos)


// let nombre = prompt('Ingrese su nombre')
// let apellido = prompt('Ingrese su apellido')
// let edad = Number(prompt('Ingrese su edad'))

// class User {

//     constructor(nombre, apellido, edad) {

//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }

// }

// // function Usuario(nombre, apellido, edad) {

// //     this.nombre = nombre
// //     this.apellido = apellido
// //     this.edad = edad
// // }

// // let usuario = {
// //     nombre,
// //     apellido,
// //     edad
// // }

// let user = new User(nombre, apellido, edad)
// // let usuario = new Usuario(nombre, apellido, edad)


// let users = []

// if (getLocalStorage('users')) {
//     users = getLocalStorage('users')
// }

// // users = getLocalStorage('users') || []

// users.push(user)


// saveInLocalStorage('users', users)