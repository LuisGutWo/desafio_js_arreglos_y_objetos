
// Arreglo de objetos
const propiedades = [
    {
        id: 10,
        src: "assets/img/bf437fe7205cadf31dcfcc25e19c6776.png",
        nombre: "Casa en las Lomas",
        cuartos: 4,
        metros: 200,
        descripcion: "Hermosa y tranquila casa en urbanizacion los Almendros"
    },
    {
        id: 11,
        src: "assets/img/n_wm_2019071800076950930.jpg",
        nombre: "Casa en Bella Vista",
        cuartos: 3,
        metros: 100,
        descripcion: "Hermosa propiedade, moderna y traqnuila"
    },
    {
        id: 12,
        src: "assets/img/D_NQ_NP_922045-MLC45638526616_042021-O.webp",
        nombre: "Casa en playa Papudo",
        cuartos: 5,
        metros: 300,
        descripcion: "El respirar aire puro y el estar cerca a laplaya sonuna bendicion"
    },
    {
        id: 13,
        src: "assets/img/CanquenNorte-Fachada-Small.webp",
        nombre: "Casa en Canquen Norte",
        cuartos: 6,
        metros: 400,
        descripcion: "Tranquila casa de campo en un sector privilegiado con piscina y quincho"
    },
    {
        id: 14,
        src: "assets/img/D_NQ_NP_722754-MLM51465451114_092022-W.jpg",
        nombre: "Casa en Avenida Peru",
        cuartos: 5,
        metros: 200,
        descripcion: "Casa moderna, amplia y muy centrico..."
    },
    {
        id: 15,
        src: "assets/img/n_wm_2020012724139526475.jpg",
        nombre: "Casa en Vitacura",
        cuartos: 4,
        metros: 200,
        descripcion: "El mejor sector para vivir, en el corazon de la ciudad"
    },
];

// Variables
const listaPropiedades = document.querySelector("#listaPropiedades");
const total = document.querySelector("#total");
const formulario = document.querySelector("#form");
const cantidadCuartos = document.querySelector("#cantidadCuartos");
const min = document.querySelector("#min");
const max = document.querySelector("#max");


// Total de propiedades html DOM
total.innerHTML = `Total: ${propiedades.length}`;

listaPropiedades.innerHTML = "";
for (let propiedad of propiedades) {
    listaPropiedades.innerHTML += `
    <article class="card text-center bg-info articulo">
            <img class="img-fluid" src="${propiedad.src}">
            <h4 class="text-dark">${propiedad.nombre}</h4>
            <h6 class="text-dark">Habitaciones: ${propiedad.cuartos}</h6>
            <h6 class="text-dark">Metros: ${propiedad.metros}</h6>
            <p class="text-dark">${propiedad.descripcion}</p>
            <a href="/propiedad/${propiedad.id}"><button class="btn btn-danger">Ver mas</button></a>
        </article>`
};

// procesar formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    listaPropiedades.innerHTML = "";
    for (let propiedad of propiedades) {
        if (propiedad.metros >= min.value && propiedad.metros <= max.value || propiedad.cuartos >= min.value && propiedad.cuartos >= max.value){
            listaPropiedades.innerHTML += `
            <article class="card text-center bg-info articulo">
            <img class="img-fluid" src="${propiedad.src}">
            <h4 class="text-dark">${propiedad.nombre}</h4>
            <h6 class="text-dark">Habitaciones: ${propiedad.cuartos}</h6>
            <h6 class="text-dark">Metros: ${propiedad.metros}</h6>
            <p class="text-dark">${propiedad.descripcion}</p>
            <a href="/propiedad/${propiedad.id}"><button class="btn btn-danger">Ver mas</button></a>
        </article>`
        }
    }
});
