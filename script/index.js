// Lógica del carrusel de proyectos
let index = 0;
const proyectos = document.querySelectorAll('.proyecto');

function mostrarProyecto(index) {
    proyectos.forEach((proyecto, i) => {
        proyecto.style.display = i === index ? 'block' : 'none';
    });
}

function avanzarProyecto() {
    index = (index + 1) % proyectos.length;
    mostrarProyecto(index);
}

function retrocederProyecto() {
    index = (index - 1 + proyectos.length) % proyectos.length;
    mostrarProyecto(index);
}

document.querySelector('.siguiente').addEventListener('click', avanzarProyecto);
document.querySelector('.anterior').addEventListener('click', retrocederProyecto);

