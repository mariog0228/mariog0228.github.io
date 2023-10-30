document.addEventListener("DOMContentLoaded", function () {
    const secciones = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Ocultar todas las secciones, excepto la de "Qué es IMC"
    secciones.forEach((seccion) => {
        if (seccion.id !== "inicio") {
            seccion.style.display = "none";
        }
    });

    // Manejar el evento de clic en el menú de navegación
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            // Ocultar todas las secciones
            secciones.forEach((seccion) => {
                seccion.style.display = "none";
            });

            // Mostrar la sección seleccionada
            const targetSection = document.getElementById(targetId);
            targetSection.style.display = "block";
        });
    });

    // Código para la calculadora de IMC
    const calcularBtn = document.getElementById("calcular");
    const alturaInput = document.getElementById("altura");
    const pesoInput = document.getElementById("peso");
    const resultadoSpan = document.getElementById("resultado");
    const estadoSpan = document.getElementById("estado");

    calcularBtn.addEventListener("click", function () {
        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);

        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            alert("Por favor, ingresa valores válidos y positivos para altura y peso.");
            return;
        }

        const imc = peso / (altura * altura);
        resultadoSpan.textContent = imc.toFixed(2);

            // Función para mostrar la imagen específica y ocultar otras
    function mostrarImagen(id, imagenesAocultar) {
        // Ocultar las imágenes específicas
        imagenesAocultar.forEach((idImagen) => {
            const imagen = document.getElementById(idImagen);
            if (imagen) {
                imagen.style.display = "none";
            }
        });

        // Mostrar la imagen correspondiente
        const imagen = document.getElementById(id);
        if (imagen) {
            imagen.style.display = "block";
        }
    }
        // Establecer el estado y mostrar la imagen correspondiente
        if (imc < 18.5) {
            estadoSpan.textContent = "Peso bajo";
            mostrarImagen("img-bajo-peso", ["img-normal", "img-sobrepeso", "img-obeso", "img-obesidad-severa", "img-obesidad-morbida"]);
        } else if (imc >= 18.5 && imc <= 24.9) {
            estadoSpan.textContent = "Ideal";
            mostrarImagen("img-normal", ["img-bajo-peso", "img-sobrepeso", "img-obeso", "img-obesidad-severa", "img-obesidad-morbida"]);
        } else if (imc >= 25 && imc <= 29.9) {
            estadoSpan.textContent = "Sobrepeso";
            mostrarImagen("img-sobrepeso", ["img-bajo-peso", "img-normal", "img-obeso", "img-obesidad-severa", "img-obesidad-morbida"]);
        } else if (imc >= 30 && imc <= 34.9) {
            estadoSpan.textContent = "Obesidad";
            mostrarImagen("img-obeso", ["img-bajo-peso", "img-normal", "img-sobrepeso", "img-obesidad-severa", "img-obesidad-morbida"]);
        } else if (imc >= 35 && imc <= 39.9) {
            estadoSpan.textContent = "Obesidad severa";
            mostrarImagen("img-obesidad-severa", ["img-bajo-peso", "img-normal", "img-sobrepeso", "img-obeso", "img-obesidad-morbida"]);
        } else {
            estadoSpan.textContent = "Obesidad morbida";
            mostrarImagen("img-obesidad-morbida", ["img-bajo-peso", "img-normal", "img-sobrepeso", "img-obeso", "img-obesidad-severa"]);
        }
    });
});