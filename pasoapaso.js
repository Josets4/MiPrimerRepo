// DATOS DE PASOS
const PASOS = [
    {
        numero: 1,
        titulo: "🍕 Preparar la masa base",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
        descripcion: "Extiende la <strong>masa para pizza</strong> sobre una superficie enharinada. Dale forma circular o rectangular según tu bandeja, asegurándote de que el grosor sea uniforme para un horneado perfecto."
    },
    {
        numero: 2,
        titulo: "🍅 Base de Salsa y Queso",
        // Enlace actualizado y verificado:
        imagen: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600", 
        descripcion: "Esparce una capa generosa de <strong>salsa de tomate</strong> desde el centro hacia afuera. Luego, cubre toda la superficie con abundante <strong>queso mozzarella</strong> rallado o en láminas para lograr el fundido ideal."
    },
    {
        numero: 3,
        titulo: "🥩 El toque Especial: Pepperoni",
        imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
        descripcion: "Distribuye las rodajas de <strong>pepperoni</strong> uniformemente sobre el queso. Al hornearse, el pepperoni soltará su aceite característico, dándole ese sabor ahumado y picante a la <strong>pizza especial</strong>."
    },
    {
        numero: 4,
        titulo: "🔥 Horneado y Crujiente",
        imagen: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=600",
        descripcion: "Lleva al horno precalentado a <strong>220°C</strong> por unos <strong>12-15 minutos</strong>. Retira cuando el borde esté dorado y el queso burbujee. ¡Sirve caliente y disfruta de tu pizza recién hecha!"
    }
];

class GuiaPasoAPaso {
    constructor() {
        this.pasoActual = 0;
        this.totalPasos = PASOS.length;
        this.init();
    }

    init() {
        this.generarPasos();
        this.configurarEventos();
        this.mostrarPaso(0);
    }

    generarPasos() {
        const container = document.getElementById('stepsContainer');
        container.innerHTML = PASOS.map((paso, index) => `
            <div class="step" data-paso="${index}">
                <div class="step-header">
                    <div class="step-number">${paso.numero}</div>
                    <div class="step-title">${paso.titulo}</div>
                </div>
                <div class="step-content">
                    <img src="${paso.imagen}" alt="${paso.titulo}" class="step-image" loading="lazy">
                    <div class="step-text">
                        <h3>${paso.titulo}</h3>
                        <div class="step-description">${paso.descripcion}</div>
                    </div>
                </div>
            </div>
        `).join('') + `
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn" id="btnAnterior">⬅️ Anterior</button>
                <button class="nav-btn" id="btnSiguiente">Siguiente ➡️</button>
            </div>
        `;
    }

    configurarEventos() {
        document.getElementById('btnAnterior').addEventListener('click', () => this.pasoAnterior());
        document.getElementById('btnSiguiente').addEventListener('click', () => this.pasoSiguiente());
    }

    mostrarPaso(indice) {
        document.querySelectorAll('.step').forEach(paso => paso.classList.remove('active'));
        document.querySelector(`[data-paso="${indice}"]`).classList.add('active');
        
        this.pasoActual = indice;
        
        const progreso = ((indice + 1) / this.totalPasos) * 100;
        document.getElementById('progressFill').style.width = `${progreso}%`;

        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');

        btnAnterior.disabled = indice === 0;
        btnSiguiente.innerHTML = indice === this.totalPasos - 1 
            ? '✅ ¡Receta Completada!' 
            : 'Siguiente ➡️';
        btnSiguiente.disabled = indice === this.totalPasos - 1;
    }

    pasoSiguiente() {
        if (this.pasoActual < this.totalPasos - 1) {
            this.mostrarPaso(this.pasoActual + 1);
        }
    }

    pasoAnterior() {
        if (this.pasoActual > 0) {
            this.mostrarPaso(this.pasoActual - 1);
        }
    }
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', () => {
    window.guia = new GuiaPasoAPaso();
});