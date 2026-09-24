# SUPER CVORT

Página web del vivero Verde Andino.

## Estructura

El sitio está organizado como un sitio estático multipágina. Cada vista tiene ahora su propio archivo HTML y su propia hoja de estilos, mientras que `css/base.css` contiene únicamente los estilos compartidos:

- `index.html` + `css/inicio.css` - Inicio, misión, visión, plantas destacadas, galería y videos.
- `catalogo.html` + `css/catalogo.css` - Catálogo de 8 categorías y sus fichas de producto.
- `nosotros.html` + `css/nosotros.css` - Historia, valores, trayectoria y equipo.
- `contacto.html` + `css/contacto.css` - Información de contacto, formulario y cómo llegar.
- `css/base.css` - Reset, navegación, pie de página, layout, botones, encabezados y accesibilidad compartidos.

La navegación usa enlaces HTML normales entre páginas, por lo que funciona directamente en GitHub Pages sin depender de JavaScript. El carrusel de videos de `index.html` mantiene sus controles CSS y un pequeño script para pausar el video que deja de estar visible.

## Catálogo

El catálogo tiene 8 categorías (pestañas) con 18 fichas de producto en total. Cada ficha incluye foto, nombre científico, descripción, cuidados (luz, riego, tamaño, nivel), precio de referencia en COP y un botón que lleva a la página de contacto.

1. Árboles
2. Orquídeas
3. Palmas
4. Suculentas y Cactos
5. Helechos y Follajes
6. Flores y Bromelias
7. Aromáticas y Comestibles
8. Macetas y Sustratos

## Imágenes

- `palma-cera.jpg`, `orquidea-cattleya.jpg`, `helecho-culantrillo.jpg`, `bromelia-guzmania.jpg`, `suculenta-corona-fraile.jpg`, `palmas-cocora.jpg`, `vivero.jpg` - Fotografías de Pexels (ver `enlaces-descarga.txt`).
- El resto de imágenes de `assets/img/` - Generadas por IA para completar todas las fichas del catálogo. Todas están optimizadas a máximo 1200 px y calidad 85.
- `semillas-palma-cera.jpg` - Imagen generada por IA para la ficha "Semillas de Palma de Cera" (categoría 3. Palmas): muestra el sobre de semillas con la plántula. `palmas-cocora.jpg` (foto de Pexels) queda disponible como imagen de paisaje/origen.

## Estilos

Las hojas de estilos están dentro de `css/` para mantener separados los estilos comunes de los estilos propios de cada página. Las rutas a imágenes desde CSS usan `../assets/` porque las hojas viven en esa carpeta.
