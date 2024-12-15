import { propiedades_alquiler, propiedades_venta } from "./data.js";

function renderizarPropiedades(propiedades, contenedorId, limite = 3){

  const contenedor = document.getElementById(contenedorId)
  let contenidoHtml = "";

  for (let i = 0; i < propiedades.length && i < limite; i++) {
    const propiedad = propiedades[i];

    let propiedadHtml = `
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
    contenidoHtml += propiedadHtml;    
  }
  contenedor.innerHTML = contenidoHtml;
}

window.onload = () => {
    renderizarPropiedades(propiedades_venta,"venta-container", 3)
    renderizarPropiedades(propiedades_alquiler, "alquiler-container", 3)

  document.getElementById("btn-venta").addEventListener("click", () =>{
    window.location.href  = "libros_venta.html";
  });

  document.getElementById("btn-encamino").addEventListener("click", () =>{
    window.location.href  = "libros_encamino.html";
  });
}

