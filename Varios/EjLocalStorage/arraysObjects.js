    
// let personas = {
//     persona1: {
//     nombre:"Fernandito",
//     edad:20,
//     },
//     persona2: {
//     nombre:"nico",
//     edad:24,
//     },
//     persona3: {
//     nombre:"juan",
//     edad:34,
//     },
//     persona4: {
//     nombre:"carlos",
//     edad:54,
//     }
// }
// esto se vio en app.js
// console.log(personas);


let libros = [{
    libro1: {
    nombre:"Fernandito",
    edad:20,
    },
    libro2: {
    nombre:"nico",
    edad:24,
    },
    libro3: {
    nombre:"juan",
    edad:34,
    },
    libro4: {
    nombre:"carlos",
    edad:54,
    }
}]

// console.log(libros);




class ProductosBodega {
    constructor(id, title, price, stock, imagen){
        this.id = id;
        this.title=title;
        this.price = price;
        this.stock = stock;
        this.imagen = imagen;
    }

    descuento10(){
        precioDesc = Math.round(this.price * 0.9);
        return precioDesc
    }
}
const vaini = new ProductosBodega (1, 'Vainilla',100 , 10, '../media/img/ejerciciosJS/A.jpg');
const chocol = new ProductosBodega (2, 'Chocolate',200 , 8, '../media/img/ejerciciosJS/B.jpg');
const coco = new ProductosBodega (3, 'Coco',300 , 15, '../media/img/ejerciciosJS/C.jpg');
const truf = new ProductosBodega (4, 'Trufa',400 , 3, '../media/img/ejerciciosJS/D.jpg');
const naranja = new ProductosBodega (5, 'Naranja', 120, 32, '../media/img/ejerciciosJS/E.jpg');
const gluten = new ProductosBodega (6, 'Gluten', 256, 18, '../media/img/ejerciciosJS/F.jpg');







function guardarLocalStorage() {
    
    //array(productos), que contiene objetos
    const productos = [
        vaini,
        chocol,
        coco,
        truf,
        naranja,
        gluten
    ];

    localStorage.setItem("llaveProductos", JSON.stringify (productos));

}

guardarLocalStorage();



function obtenerLocalStorage() {

    if (localStorage.getItem("llaveProductos")) {
        
        let productos = JSON.parse(localStorage.getItem("llaveProductos"));

        console.log(productos);  
    }
    else{
        console.log("no hay info en storage");
    }

}

obtenerLocalStorage();