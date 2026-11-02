// ===================================================================
//  Lógica de la página: navegación entre vistas y render de cartas
// ===================================================================

(function () {
  "use strict";

  // ----- Referencias a las vistas -----
  const vistas = {
    inicio: document.getElementById("vista-inicio"),
    "4toC": document.getElementById("vista-4toC"),
    "5toA": document.getElementById("vista-5toA"),
  };

  // ----- Botones que cambian de vista -----
  const botonesNavegacion = document.querySelectorAll("[data-vista]");

  // ----- Contenedor de las cartas -----
  const galeria = document.getElementById("galeria");
  const plantillaCarta = document.getElementById("plantilla-carta");

  // ----- Contadores de proyectos -----
  const contadorInicio = document.getElementById("contador-proyectos");
  const contadorGaleria = document.getElementById(
    "contador-proyectos-galeria"
  );

  // -----------------------------------------------------------------
  //  Render de las cartas de proyecto
  // -----------------------------------------------------------------
  function renderCartas() {
    const proyectos = window.proyectos || [];

    // Actualizar contadores
    if (contadorInicio) contadorInicio.textContent = proyectos.length;
    if (contadorGaleria) contadorGaleria.textContent = proyectos.length;

    if (!galeria) return;

    galeria.innerHTML = "";

    proyectos.forEach((proyecto, indice) => {
      const numero = String(indice + 1).padStart(2, "0");
      const carta = plantillaCarta.content.cloneNode(true);

      // id para enlaces internos (#proyecto-1, #proyecto-2, ...)
      const article = carta.querySelector(".carta");
      article.id = `proyecto-${indice + 1}`;
      article.style.animationDelay = `${Math.min(indice * 0.05, 0.4)}s`;

      // Número del proyecto
      carta.querySelector(".carta-numero").textContent = numero;

      // Nombre e integrantes
      carta.querySelector(".carta-titulo").textContent = proyecto.nombre;
      carta.querySelector(".carta-integrantes-nombres").textContent =
        proyecto.integrantes;

      // Descripción
      carta.querySelector(".carta-descripcion").textContent =
        proyecto.descripcion;

      // Imagen
      const imagenEl = carta.querySelector(".carta-img");
      const placeholderEl = carta.querySelector(".carta-imagen-placeholder");
      const linkImagen = carta.querySelector(".carta-imagen-link");

      if (proyecto.imagen) {
        imagenEl.src = proyecto.imagen;
        imagenEl.alt = `Imagen del proyecto ${numero}: ${proyecto.nombre}`;
        // El enlace de la imagen apunta al enlace del proyecto, o a la
        // imagen misma si no hay enlace definido.
        const href = proyecto.enlace || proyecto.imagen;
        linkImagen.href = href;
        linkImagen.target = esExterno(href) ? "_blank" : "_self";
        linkImagen.rel = esExterno(href) ? "noopener noreferrer" : "";
        placeholderEl.hidden = true;
      } else {
        imagenEl.hidden = true;
        linkImagen.hidden = true;
        placeholderEl.hidden = false;
      }

      // Botón de enlace
      const botonEnlace = carta.querySelector(".boton-enlace");
      const botonPendiente = carta.querySelector(".boton-pendiente");

      if (proyecto.enlace) {
        botonEnlace.href = proyecto.enlace;
        botonEnlace.target = esExterno(proyecto.enlace) ? "_blank" : "_self";
        botonEnlace.rel = esExterno(proyecto.enlace)
          ? "noopener noreferrer"
          : "";
        botonPendiente.hidden = true;
      } else {
        botonEnlace.hidden = true;
        botonPendiente.hidden = false;
      }

      galeria.appendChild(carta);
    });
  }

  // ¿Es una URL externa (http://, https://, mailto:, etc.)?
  function esExterno(href) {
    if (!href) return false;
    return /^(https?:)?\/\//i.test(href) || href.startsWith("mailto:");
  }

  // -----------------------------------------------------------------
  //  Navegación entre vistas
  // -----------------------------------------------------------------
  function cambiarVista(vistaDestino) {
    Object.entries(vistas).forEach(([nombre, elemento]) => {
      elemento.hidden = nombre !== vistaDestino;
    });
    window.scrollTo({ top: 0, behavior: "auto" });

    // Manejar enlaces internos a cartas (#proyecto-3, etc.)
    if (vistaDestino === "5toA" && window.location.hash.startsWith("#proyecto-")) {
      const destino = document.getElementById(window.location.hash.slice(1));
      if (destino) {
        setTimeout(() => {
          destino.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }

  // Asignar el click a todos los botones de navegación
  botonesNavegacion.forEach((boton) => {
    boton.addEventListener("click", () => {
      const destino = boton.getAttribute("data-vista");
      if (destino) {
        cambiarVista(destino);
      }
    });
  });

  // -----------------------------------------------------------------
  //  Inicialización según el hash de la URL al cargar
  // -----------------------------------------------------------------
  function inicializar() {
    renderCartas();

    const hash = window.location.hash;
    if (hash === "#4toC" || hash === "#5toA" || hash === "#inicio") {
      cambiarVista(hash.slice(1));
    } else if (hash.startsWith("#proyecto-")) {
      cambiarVista("5toA");
    }
  }

  // Escuchar cambios en el hash (para que #4toC, #5toA, etc. funcionen)
  // cuando el usuario los pega directamente en la URL.
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash;
    if (hash === "#4toC" || hash === "#5toA" || hash === "#inicio") {
      cambiarVista(hash.slice(1));
    }
  });

  // Arrancar
  document.addEventListener("DOMContentLoaded", inicializar);
})();
