// localStorage.clear();





function guardarLocalStorage() {

    let persona1 = {
        nombre:"Fernandito",
        edad:24,
        frase: "cacapeo",
        coordinaciones: {
            norte: 10,
            sur:-10
        }

    }

    let nombre = "nikito";

    let personas = {
        persona1: {
        nombre:"Fernandito",
        edad:20,
        },
        persona2: {
        nombre:"nico",
        edad:24,
        },
        persona3: {
        nombre:"juan",
        edad:34,
        },
        persona4: {
        nombre:"carlos",
        edad:54,
        }
    }

    localStorage.setItem("llaveNombre", nombre);
    localStorage.setItem("llavePersona1", JSON.stringify (persona1));
    localStorage.setItem("llavePersonas", JSON.stringify (personas));

}

guardarLocalStorage();



function obtenerLocalStorage() {

    if (localStorage.getItem("llavePersonas")) {

        let nombre = localStorage.getItem("llaveNombre");
        let persona1 = JSON.parse(localStorage.getItem("llavePersona1"));
        let personas = JSON.parse(localStorage.getItem("llavePersonas"));
    
        console.log(nombre);
        console.log(persona1);   
        console.log(personas);  
    }
    else{
        console.log("no hay info en storage");
    }

}

obtenerLocalStorage();