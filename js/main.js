// Arreglo de objetos
const propiedades = [
    {
        id: 10,
        src: "/assets/img/casa_las_lomas.png",
        nombre: "Casa en las Lomas",
        cuartos: 4,
        metros: 300,
        descripcion: "Hermosa y tranquila casa en urbanizacion los Almendros. seguridad privada y facil eccesibilidad"
    },
    {
        id: 11,
        src: "/assets/img/casa_bellavista.jpg",
        nombre: "Casa en Bella Vista",
        cuartos: 3,
        metros: 100,
        descripcion: "Propiedad moderna y traqnuila. seguridad privada las 24 horas"
    },
    {
        id: 12,
        src: "/assets/img/casa_huechuraba.jpg",
        nombre: "Casa en Huechuraba",
        cuartos: 5,
        metros: 200,
        descripcion: "Urbanizacion nueva de facil acceso y barrios comerciales colindantes. Condominio Pedro Fontova, Huechuraba"
    },
    {
        id: 13,
        src: "/assets/img/casa_playa.jpg",
        nombre: "Casa en playa Papudo",
        cuartos: 6,
        metros: 500,
        descripcion: "Tranquila casa a 5 minutos de la playa en sector privilegiado con piscina y quincho"
    },
    {
        id: 14,
        src: "/assets/img/casa_av_peru.jpg",
        nombre: "Casa en Avenida Peru",
        cuartos: 4,
        metros: 300,
        descripcion: "Casa moderna, amplia y muy centrica. Sector tranquilo y con seguridad privada..."
    },
    {
        id: 15,
        src: "assets/img/casa_vitacura.jpg",
        nombre: "Casa en Vitacura",
        cuartos: 4,
        metros: 200,
        descripcion: "El mejor sector para vivir en Santiago, en el corazon de la ciudad y con todas la comodidades a solo unos pasos..."
    },
];

// Variables
const listaPropiedades = document.querySelector("#listaPropiedades");
const cantidadCuartos = document.querySelector("#cantidadCuartos");
const formulario = document.querySelector("#form");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const total = document.querySelector("#total");

// Pintando el html
const render = (array) => {

    // condicional de alerta
    if (array.length === 0) {
        alert("Debes ingresar los datos para empezar la busqueda")
        html += `<article class="card text-center bg-info articulo mb-3">
                     <img class="img-fluid" src="${propiedad.src}">
                     <section class="card-body p-1">
                         <h4 class=" card-title text-dark">${propiedad.nombre}</h4>
                         <h6 class="text-dark">Habitaciones: ${propiedad.cuartos}</h6>
                         <h6 class="text-dark">Metros: ${propiedad.metros}</h6>
                         <p class="text-dark">${propiedad.descripcion}</p>
                         <a href="#"><button class="btn btn-danger">Ver mas</button></a>
                     </section>
                 </article>`;
    }

    let html = "";
    for (let propiedad of array) {
        html += `<article class="card text-center bg-info articulo mb-3">
                     <img class="img-fluid" src="${propiedad.src}">
                     <section class="card-body p-1">
                         <h4 class=" card-title text-dark">${propiedad.nombre}</h4>
                         <h6 class="text-dark">Habitaciones: ${propiedad.cuartos}</h6>
                         <h6 class="text-dark">Metros: ${propiedad.metros}</h6>
                         <p class="text-dark">${propiedad.descripcion}</p>
                         <a href="#"><button class="btn btn-danger">Ver mas</button></a>
                     </section>
                 </article>`;
    }
    listaPropiedades.innerHTML = html;
    total.innerHTML = `Total: ${array.length}`;
};

// aplicando renderizacion
render(propiedades);

// evento reset
formulario.addEventListener("reset", () => render(propiedades));


// evento buscar
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const numCuartos = cantidadCuartos.value;
    const minimo = +min.value;
    const maximo = +max.value;

    const arrayFiltrado = [];
    for (let propiedad of propiedades) {
        if (propiedad.metros >= minimo && propiedad.metros <= maximo && propiedad.cuartos <= numCuartos) {
            arrayFiltrado.push(propiedad);
        }
    };
    render(arrayFiltrado);
});
