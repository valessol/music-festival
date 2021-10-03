
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria () {
    const galeria = document.querySelector('.galeria-img');
    for (let i = 1; i <=12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId=i;

        //Evento de la imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista)
    }
}

function mostrarImagen(e) {
    const id = parseInt (e.target.dataset.imagenId);
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    //Efecto overlay
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cerrar imagen
    const cerrar = document.createElement('P');
    cerrar.textContent = 'X';
    cerrar.classList.add('btn-cerrar');

    overlay.appendChild(cerrar)

    cerrar.onclick = function () {
        overlay.remove();
    }
    overlay.onclick = function () {
        overlay.remove();
    }

    //Mostrar overlay en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}