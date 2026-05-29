const buscador =
document.getElementById('buscar');

const tarjetas =
document.querySelectorAll('.tarjeta');

const botonesFiltro =
document.querySelectorAll('.filtro');

const botonModoOscuro =
document.getElementById('modoOscuro');

/* BUSCADOR */

buscador.addEventListener('keyup', () => {

    const texto =
    buscador.value.toLowerCase();

    tarjetas.forEach(tarjeta => {

        const titulo =
        tarjeta.querySelector('h2')
        .textContent
        .toLowerCase();

        if(titulo.includes(texto)){

            tarjeta.style.display = 'block';

        }else{

            tarjeta.style.display = 'none';

        }

    });

});

/* FILTROS */

botonesFiltro.forEach(boton => {

    boton.addEventListener('click', () => {

        const categoria =
        boton.dataset.categoria;

        tarjetas.forEach(tarjeta => {

            if(categoria === 'todos'){

                tarjeta.style.display = 'block';

            }

            else if(
                tarjeta.dataset.categoria
                === categoria
            ){

                tarjeta.style.display = 'block';

            }

            else{

                tarjeta.style.display = 'none';

            }

        });

    });

});

/* DARK MODE */

botonModoOscuro
.addEventListener('click', () => {

    document.body
    .classList
    .toggle('dark');

});