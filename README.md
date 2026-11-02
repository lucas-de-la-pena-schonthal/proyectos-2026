# Colegio Schonthal · Proyectos 2026

Galería estática de los proyectos realizados por los grupos de la clase durante el año 2026.

La página tiene una pantalla de inicio con dos secciones: **4to C** (vacía, sin proyectos cargados) y **5to A**, con las 9 cartas de los proyectos del grupo.

Hecho en **HTML, CSS y JavaScript puro** — sin frameworks, sin build, sin dependencias. Solo archivos que se sirven directo.

## Estructura del proyecto

```
colegio-schonthal-2026/
├── index.html          # Estructura de la página
├── estilos.css         # Todos los estilos
├── script.js           # Lógica de navegación y render de cartas
├── datos.js            # 👉 ACÁ VA LA INFO DE LOS PROYECTOS
├── imagenes/           # (crear) fotos de los proyectos
└── .nojekyll           # Para que GitHub Pages no procese con Jekyll
```

## Cómo editar los proyectos

Toda la información de las cartas de 5to A está en **`datos.js`**. Es una lista de 9 objetos, uno por carta. Cada uno se ve así:

```js
{
  nombre: "Proyecto Huerta",
  integrantes: "Ana · Bruno · Carla",
  descripcion: "Investigamos cómo cultivar...",
  imagen: "imagenes/huerta.jpg",
  enlace: "https://docs.google.com/...",
}
```

### Los campos, uno por uno

| Campo | Qué poner | Ejemplo |
|---|---|---|
| `nombre` | Nombre del proyecto. | `"Proyecto Huerta"` |
| `integrantes` | Nombres separados con `·`. | `"Ana · Bruno · Carla"` |
| `descripcion` | Breve descripción del proyecto. | `"Investigamos cómo cultivar..."` |
| `imagen` | Ruta local en `imagenes/` o URL externa. Vacío = marcador de posición. | `"imagenes/huerta.jpg"` |
| `enlace` | URL a la que apunta el botón. Vacío = botón "Enlace pendiente". | `"https://docs.google.com/..."` |

### Para las imágenes

Creá una carpeta **`imagenes/`** (al lado de `index.html`) y guardá ahí las fotos de los proyectos:

```
colegio-schonthal-2026/
├── index.html
├── datos.js
├── imagenes/
│   ├── huerta.jpg
│   ├── robotica.jpg
│   └── ...
```

Después las referenciás en `datos.js` como `"imagenes/huerta.jpg"`.

### Para los enlaces

- **Externos** (imágenes, docs, videos, otras páginas): poné la URL completa, ej. `"https://drive.google.com/..."`.
- **A otra carta de la misma página**: usá `"#proyecto-3"` para ir a la carta 3.

## Cómo verlo localmente

Simplemente abrí `index.html` en cualquier navegador. No hace falta instalar nada.

Si preferís servirlo (opcional):

```bash
# Con Python:
python3 -m http.server 8000

# O con Node.js:
npx serve .
```

Y después entrás a `http://localhost:8000`.

## Deploy en GitHub Pages

1. **Crear el repositorio en GitHub.**

2. **Subir el proyecto:**

   ```bash
   git init
   git add .
   git commit -m "Proyectos Colegio Schonthal 2026"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - En el repo, ir a **Settings → Pages**.
   - En **Source** (Build and deployment), elegir **Deploy from a branch**.
   - En **Branch**, elegir **main** y la carpeta **/ (root)**.
   - Guardar.

4. Esperar 1-2 minutos. La URL va a ser `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

Cada vez que edites `datos.js` (o cualquier archivo) y hagas `push` a `main`, el sitio se actualiza solo en GitHub Pages.

## Stack

- HTML5 semántico
- CSS3 con variables y grid responsivo
- JavaScript vanilla (sin dependencias)
- Tipografías Inter (texto) y Fraunces (títulos) desde Google Fonts
