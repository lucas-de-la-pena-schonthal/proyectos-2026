// ===================================================================
//  PROYECTOS · 5to A — COLEGIO SCHONTHAL 2026
// -------------------------------------------------------------------
//  👉 EDITAR ESTE ARCHIVO para cargar la información de los proyectos.
//  Cada proyecto de esta lista se muestra como una carta en la
//  página de 5to A.
//
//  Campos de cada proyecto:
//   · nombre:        nombre del proyecto.
//   · integrantes:   nombres de los integrantes del grupo.
//   · descripcion:   breve descripción del proyecto.
//   · imagen:        (opcional) URL o ruta de una imagen del proyecto.
//                    Ejemplos: "https://ejemplo.com/foto.jpg"
//                              "imagenes/proyecto1.jpg" (archivo local
//                              en la carpeta "imagenes" del proyecto)
//                    Si queda vacío (""), la carta muestra un
//                    marcador de posición.
//   · enlace:        (opcional) URL a la que apunta el botón de la carta:
//                    puede ser una imagen, un documento, una
//                    presentación, otra página, etc.
//                    Si queda vacío (""), el botón aparece como
//                    "Enlace pendiente".
//   · presentacion:  (opcional) URL de la presentación del proyecto.
//                    Se muestra en un botón "Presentación" junto al
//                    enlace. Si queda vacío (""), aparece como
//                    "Presentación pendiente".
//
//  💡 Las cartas se pueden enlazar entre sí con "#proyecto-1",
//     "#proyecto-2", ... "#proyecto-9".
//     Las cartas de 4to C usan "#proyecto4C-1", "#proyecto4C-2", ...
// ===================================================================

const proyectos = [
  {
    nombre: "MiauGuau",
    integrantes: "Ian Fuciños · Leandro Asenjo · Mateo Vives · Jeremías Schmeigel",
    descripcion:
      "Miauguau es un sitio web dedicado a promover y facilitar la adopción responsable de mascotas, actuando como puente entre animales rescatados que buscan un hogar y personas dispuestas a darles una segunda oportunidad. Nace con la convicción de que cada animal abandonado o maltratado merece una familia que lo cuide, lo quiera y lo integre como un miembro más del hogar.",
    imagen: "img/5A/miaugau.png",
    enlace: "https://ianf.pythonanywhere.com/",
    presentacion: "https://docs.google.com/presentation/d/15zOaoiZKb5AxEZoYDf2vQ1N83Ocs611PELCibXyzTuE/edit?usp=sharing",
  },
  {
    nombre: "Donación de Sangre",
    integrantes: "Mateo Vives · Jeremías Schmeigel",
    descripcion:
      "La página integra información clave como requisitos para donar, recomendaciones médicas, compatibilidades y respuesta a mitos. Además, incluye un sistema de carga de datos para el pre-registro de voluntarios, facilitando la reserva de turnos y la organización logística del evento.",
    imagen: "img/5A/donacion.png",
    enlace: "https://lucas-de-la-pena-schonthal.github.io/Donacion-de-Sangre/",
    presentacion: "",
  },
  {
    nombre: "V-Stats",
    integrantes: "Lyan Park · Juan Pablo Arroyo",
    descripcion:
      "V-Stats es una plataforma web desarrollada para la comunidad competitiva de Valorant, diseñada con el objetivo de facilitar y centralizar la búsqueda de compañeros de equipo (dúos) y el reclutamiento para el modo Premier. La plataforma busca resolver la desorganización y la falta de coincidencia entre rangos y roles que suelen ocurrir al buscar equipo en grupos informales de redes sociales o chats.",
    imagen: "img/5A/v-stats.png",
    enlace: "https://christianabudhabi.pythonanywhere.com/",
    presentacion: "",
  },
  {
    nombre: "Cronograma Muestra Anual",
    integrantes: "Mateo Vives · Jeremías Schmeigel",
    descripcion:
      "Cronograma descriptivo con todas las actividades realizadas para la Muestra Anual del 2026 del Colegio Schönthal. Tiene soporte para idiomas Español y Coreano.",
    imagen: "img/5A/cronograma.PNG",
    enlace: "https://lucas-de-la-pena-schonthal.github.io/cronograma-muestra-2026/",
    presentacion: "",
  },
  {
    nombre: "Matzip",
    integrantes: "Valeria Kim · Eliana Lee · Karen Lee · Stella Yo",
    descripcion:
      "Matzip es un sitio web gastronómico dinámico e interactivo diseñado para simplificar la toma de decisiones al momento de salir a comer o pedir comida en la Ciudad Autónoma de Buenos Aires (CABA). Surge como respuesta a la sobreoferta de información y menús en internet, buscando reducir el tiempo de búsqueda a través de una interfaz clara, intuitiva y basada en mapas.",
    imagen: "img/5A/matzip.png",
    enlace: "https://elianalee.pythonanywhere.com/",
    presentacion: "",
  },
  {
    nombre: "Class Dismissed",
    integrantes: "Matias Perez · Joaquin Montaño · Joel Rojas · Josue Huallpa",
    descripcion:
      "Es un juego en primera persona tipo horror game. El lugar de los hechos es el mismo colegio donde entramos por la noche, sin embargo algo es raro el colegio se lo nota diferente, al poco tiempo nos encontramos con misteriosas criaturas de las cuales debemos sobrevivir.",
    imagen: "classdismissed.png",
    enlace: "",
    presentacion: "",
  },
  {
    nombre: "Sanguis Ventura",
    integrantes: "Franco Abalos · Agustin Alvarez · Ezequiel Bergel · Felipe Bosco",
    descripcion:
      "Sanguis Ventura coloca la relación rota entre Damo y Niso como motor central de la jugabilidad. Damo, ex estudiante de medicina, regresa a un hospital que distorsiona memorias y visiones de su pasado. La historia aborda amistad, expectativas y envidia, usando exploración, acertijos y combates para progresar la narrativa.",
    imagen: "img/5A/sanguis.png",
    enlace: "https://mclovinsch.github.io/Sanguis_Ventura/",
    presentacion: "",
  },
  {
    nombre: "Adicciones Contemporáneas",
    integrantes: "Emma Capretti · Anahi Carrizo · Jane Lee",
    descripcion:
      "Página web informativa dirigida a adolescentes y jóvenes que tiene como objetivo concientizar sobre esta gran problemática y enseñar cómo identificar a una persona adicta, como es el trasfondo del consumismo, qué factores de riesgo hay, Cómo se desarrolla, cómo afecta al vínculo social/laboral del individuo, recursos de ayuda (centros, líneas telefónicas, grupos de apoyo), cómo controlarlo y superarlo y promover hábitos saludables y prevención de recaídas.",
    imagen: "img/5A/adicciones.png",
    enlace: "https://emmacapretti.pythonanywhere.com/",
    presentacion: "",
  },
  {
    nombre: "Proyecto de Malvinas",
    integrantes: "Joaquin Semchman · Thiago Ortiz · Facundo corredoira · Nehuen miñana",
    descripcion:
      "Este es un juego basado en el rol de una madre donde su hijo se va a la guerra de malvinas. Adentro de este proyecto vas a tener minijuegos y objetivos para completar.",
    imagen: "img/5A/malvinas.png",
    enlace: "https://athiagoortiz-byte.github.io/PROYECTO-DE-MALVINAS/",
    presentacion: "",
  },
  {
    nombre: "FutNow",
    integrantes: "Integrante 1 · Integrante 2 · Integrante 3",
    descripcion:
      "Breve descripción del proyecto: de qué se trata, qué investigó o qué creó el grupo durante el año.",
    imagen: "",
    enlace: "",
    presentacion: "",
  },
  {
    nombre: "Mejora tus Estudios",
    integrantes: "Yujra Melody · In Valeria · Chaina Melani",
    descripcion:
      "Mejora Tus Estudios es una plataforma web diseñada con el objetivo de centralizar herramientas de organización y técnicas de aprendizaje para optimizar el rendimiento académico de estudiantes de nivel primario y secundario. La plataforma busca resolver la desorganización y el estrés común que sufren los alumnos antes de los exámenes, ofreciendo métodos de estudio estructurados, calculadoras dinámicas para planificar el tiempo, ejercicios interactivos para el manejo de la ansiedad, un cuadro comparativo de las mejores herramientas digitales de apoyo y un muro comunitario para compartir consejos entre compañeros.",
    imagen: "img/5A/estudios.png",
    enlace: "https://mvm04142.pythonanywhere.com/",
    presentacion: "",
  },
];

// Hacer la lista accesible desde script.js
window.proyectos = proyectos;

// ===================================================================
//  PROYECTOS · 4to C — COLEGIO SCHONTHAL 2026
// -------------------------------------------------------------------
//  👉 EDITAR ESTA LISTA para cargar la información de los proyectos
//  de 4to C. Usa los mismos campos que la lista de arriba:
//  nombre, integrantes, descripcion, imagen, enlace y presentacion.
// ===================================================================

const proyectos4C = [
  {
    nombre: "Olivia Rodrigo",
    integrantes: "Asma Alashkar · Clarissa Mastricola · Maria Jose Albamonte",
    descripcion:
      "En esta página hicimos un análisis de los cuatro álbumes de Olivia Rodrigo junto con otras canciones que sacó y una biografía de su vida y carrera artística.",
    imagen: "img/4C/olivia.PNG",
    enlace: "https://amariaalbamonte-cloud.github.io/Olivia-Rodrigo-an-lisis-y-biograf-a/",
  },
  {
    nombre: "Leetariaz Place",
    integrantes: "Daniel Catari · Daniel Lee · Dylan Diaz",
    descripcion:
      "Ropa que podés utilizar diariamente y muy fácil de combinar.",
    imagen: "img/4C/leetariaz.PNG",
    enlace: "https://dadady67.github.io/Leetariaz-Place-67/?authuser=0",
  },
  {
    nombre: "Recetas de Repostería",
    integrantes: "Paloma Fraga · Susej Cova",
    descripcion:
      "Página web de recetas de repostería que presenta diferentes preparaciones, como Cookies, Buttercream, Cupcakes, Panqueques, Serenito y Chocotorta. Cada receta cuenta con una lista detallada de ingredientes, instrucciones paso a paso e imágenes ilustrativas, esto permite comprender mejor el procedimiento de cada receta y facilitar el seguimiento de esta misma. El sitio está organizado de manera clara y sencilla, ayudando así la búsqueda de los postres, ofreciendo una guía para quienes quieran preparar diversas comidas.",
    imagen: "img/4C/recetas-reposteria.png",
    enlace: "https://asusejcova-sys.github.io/Pagina-Recetas./",
  },
  {
    nombre: "Diferentes Tipos de Tartas",
    integrantes: "Mateo Pelagalli · Emma Zenobi",
    descripcion:
      "La página presenta la suficiente información (sobre todo recetas), de como hacer una masa tarta salada como principal tópico y, entre ellas, diferentes tipos de la misma. Por ejemplo: tarta de hibiscus y queso mascarpone, té matcha, pastafrolas, tarta de frutillas, jamón y queso, etc.",
    imagen: "img/4C/tartas.png",
    enlace: "https://amateopelagalli-wq.github.io/proyecto-TECN.-DE-LA-INFORMACION-EMMA-ZENOBI-Y-MATEO-PELAGALLI/",
  },
  {
    nombre: "Casos sin Resolver",
    integrantes: "Cata cuervo · Sofi Mortero",
    descripcion: "La pagina contiene, en la parte princiipal el enlace en forma de boton hacia otras cuatro paginas que hablan  de temas similares. Cada pagina contiene un carrucel con imagenes y colores determinados. Tambien, titulos en cada una de ellas y una breve descripcion de cada caso que pusimos.",
    imagen: "img/4C/Casos.PNG",
    enlace: "https://acatalinacuervo-lab.github.io/Casos-sin-resolverr/",
  },
  {
    nombre: "Transfer Market",
    integrantes: "Tomas Park · Lorenzo Grillo",
    descripcion: "En esta página podés ver los últimos fichajes del fútbol, con el club de origen, el nuevo club y lo que costó cada jugador. También hay un ranking con los 10 jugadores más valiosos del mundo y una sección para descubrir al jugador del día.",
    imagen: "img/4C/transfer.png",
    enlace: "https://tomas-park934.github.io/transfer.schonthal/",
  },
  {
    nombre: "Viajes",
    integrantes: "Federica Peruzzi",
    descripcion: "La página trata sobre los viajes, hay 5 partes con diferentes temáticas, entre ellas,destinos más baratos, más caros, mejor valorados para viajar con niños, etc. ",
    imagen: "img/4C/Fede.png",
    enlace: "https://github.com/afedericaperuzzi-code/Viajes",
  },
];

// Hacer la lista accesible desde script.js
window.proyectos4C = proyectos4C;
