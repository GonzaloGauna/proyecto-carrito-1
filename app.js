// variables
const carrito = document.querySelector("#carrito");
const botones = document.querySelector("#buttons");
const listaCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventListener();

function cargarEventListener() {
    botones.addEventListener('click', agregarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];
        carritoHTML();
    })
}
function agregarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('button')) {
        const elementoSeleccionado = e.target;
        // console.log(elementoSeleccionado);
        leerDatos(elementoSeleccionado);
    }
}
function eliminarElemento(e) {
    if( e.target.classList.contains('close-container') ) {
        const elementoId = e.target.getAttribute("data-id");

        articulosCarrito = articulosCarrito.filter( elemento => elemento.id !== elementoId );

        carritoHTML();
    }
}
function leerDatos(elementoSeleccionado) {
    const infoBoton = {
        titulo: elementoSeleccionado.textContent,
        id: elementoSeleccionado.getAttribute('data-id')
    }
    articulosCarrito = [...articulosCarrito, infoBoton]

    // console.log(articulosCarrito);

    carritoHTML();
}
function carritoHTML() {

    limpiarHTML();

    articulosCarrito.forEach( elemento => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${elemento.titulo}
            </td>
            <td>
                <div class="close-container" data-id="${elemento.id}" >
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                </div>
            </td>
            `
    listaCarrito.appendChild(row);
    } )
}
function limpiarHTML() {
    listaCarrito.innerHTML = '';
}