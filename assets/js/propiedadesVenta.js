import { propiedades_venta } from "./data.js";

function renderizarLibros(propiedades, contenedorId){

  const contendor = document.getElementById(contenedorId);

  propiedades.forEach( propiedad => {
    const propiedadHTML = `
      <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}"/>
        <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.bath} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        ${propiedad.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`}
        ${propiedad.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
        </div>
      </div>
    </div>
      ` ;

    contendor.innerHTML += propiedadHTML;
  })};

window.onload = () => {

  renderizarLibros(propiedades_venta, "venta-container");
}