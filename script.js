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
  const galerias = {
    "5toA": document.getElementById("galeria"),
    "4toC": document.getElementById("galeria-4toC"),
  };
  const plantillaCarta = document.getElementById("plantilla-carta");

  // ----- Contadores de proyectos -----
  const contadores = {
    "5toA": [
      document.getElementById("contador-proyectos"),
      document.getElementById("contador-proyectos-galeria"),
    ],
    "4toC": [
      document.getElementById("contador-proyectos-4toC"),
      document.getElementById("contador-proyectos-galeria-4toC"),
    ],
  };

  // ----- Switch de tema claro/oscuro -----
  const switchTema = document.getElementById("switch-tema");
  const consultaTemaOscuro = window.matchMedia("(prefers-color-scheme: dark)");

  function temaGuardado() {
    try {
      const tema = localStorage.getItem("tema");
      return tema === "oscuro" || tema === "claro" ? tema : null;
    } catch (error) {
      return null;
    }
  }

  function aplicarTema(tema) {
    document.documentElement.dataset.tema = tema;

    if (switchTema) {
      const esOscuro = tema === "oscuro";
      switchTema.setAttribute("aria-checked", String(esOscuro));
      switchTema.setAttribute(
        "aria-label",
        esOscuro ? "Activar modo claro" : "Activar modo oscuro"
      );
    }
  }

  function inicializarTema() {
    const guardado = temaGuardado();
    aplicarTema(
      guardado || (consultaTemaOscuro.matches ? "oscuro" : "claro")
    );

    if (switchTema) {
      switchTema.addEventListener("click", () => {
        const nuevoTema =
          document.documentElement.dataset.tema === "oscuro"
            ? "claro"
            : "oscuro";

        try {
          localStorage.setItem("tema", nuevoTema);
        } catch (error) {}

        aplicarTema(nuevoTema);
      });
    }

    const alCambiarSistema = (evento) => {
      if (!temaGuardado()) {
        aplicarTema(evento.matches ? "oscuro" : "claro");
      }
    };

    if (typeof consultaTemaOscuro.addEventListener === "function") {
      consultaTemaOscuro.addEventListener("change", alCambiarSistema);
    } else if (typeof consultaTemaOscuro.addListener === "function") {
      consultaTemaOscuro.addListener(alCambiarSistema);
    }
  }

  // -----------------------------------------------------------------
  //  Render de las cartas de proyecto
  // -----------------------------------------------------------------
  function renderCartas() {
    renderGaleria("5toA", window.proyectos || [], "proyecto");
    renderGaleria("4toC", window.proyectos4C || [], "proyecto4C", {
      conPresentacion: false,
    });
  }

  function renderGaleria(vista, proyectos, prefijoId, opciones = {}) {
    const galeria = galerias[vista];
    const conPresentacion = opciones.conPresentacion !== false;

    // Actualizar contadores
    const contadorInicio = contadores[vista][0];
    const contadorGaleria = contadores[vista][1];
    if (contadorInicio) contadorInicio.textContent = proyectos.length;
    if (contadorGaleria) contadorGaleria.textContent = proyectos.length;

    if (!galeria) return;

    galeria.innerHTML = "";

    proyectos.forEach((proyecto, indice) => {
      const numero = String(indice + 1).padStart(2, "0");
      const carta = plantillaCarta.content.cloneNode(true);

      // id para enlaces internos (#proyecto-1, #proyecto4C-1, ...)
      const article = carta.querySelector(".carta");
      article.id = `${prefijoId}-${indice + 1}`;
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
      const botonEnlace = carta.querySelector(".boton-enlace:not(.boton-presentacion)");
      const botonPendiente = carta.querySelector(
        ".boton-pendiente:not(.boton-pendiente--presentacion)"
      );

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

      // Botón de presentación (no se usa en 4to C)
      const botonPresentacion = carta.querySelector(".boton-presentacion");
      const presentacionPendiente = carta.querySelector(
        ".boton-pendiente--presentacion"
      );

      if (conPresentacion && proyecto.presentacion) {
        botonPresentacion.href = proyecto.presentacion;
        botonPresentacion.target = esExterno(proyecto.presentacion)
          ? "_blank"
          : "_self";
        botonPresentacion.rel = esExterno(proyecto.presentacion)
          ? "noopener noreferrer"
          : "";
        presentacionPendiente.hidden = true;
      } else {
        botonPresentacion.hidden = true;
        // La leyenda "Presentación pendiente" solo se muestra en las
        // secciones que sí usan presentaciones (5to A).
        presentacionPendiente.hidden = !conPresentacion;
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

    // Manejar enlaces internos a cartas (#proyecto-3, #proyecto4C-2, ...)
    const prefijosCarta = { "5toA": "#proyecto-", "4toC": "#proyecto4C-" };
    if (
      vistaDestino !== "inicio" &&
      window.location.hash.startsWith(prefijosCarta[vistaDestino] || "\u0000")
    ) {
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
    inicializarTema();
    renderCartas();

    const hash = window.location.hash;
    if (hash === "#4toC" || hash === "#5toA" || hash === "#inicio") {
      cambiarVista(hash.slice(1));
    } else if (hash.startsWith("#proyecto4C-")) {
      cambiarVista("4toC");
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
