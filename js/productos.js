
const productsContainer = document.querySelector('.productos');

let vitrinaProductos = '<h2 class="text-primary">Productos</h2>';

productos.forEach(producto => {
    vitrinaProductos += `
    
        <div class="col-12 col-sm-6 col-lg-3 border-bottom producto-${producto.id}" >
            <img
            src="${producto.imagen}"
            alt="Tortas"
            class="img-fluid marketing__esquinas p-3"
            />
            
            <h2 class="text-primary text-center">${producto.title}</h2>
            <p>id: ${producto.id}</p>
            <h5 class='text-black-50'>$${producto.price} USD</h5>
            <p class="d-flex justify-content-center">
            
            <a class="btn btn-secondary text-white rounded-pill" href="#">Comprar</a>
            </p>
        </div>

    `;
})

productsContainer.innerHTML = vitrinaProductos;



////////////////desafio anterior: objects & arrays///////////////////////////////////////////
