# SUPER CVORT

Página web del vivero Verde Andino.

## Estructura

El sitio está organizado como un sitio estático multipágina. El contenido HTML de cada vista está separado en su propio archivo y todos comparten una única hoja de estilos:

- `index.html` - Inicio, misión, visión, plantas destacadas, galería y videos.
- `catalogo.html` - Catálogo de 8 categorías y sus fichas de producto.
- `nosotros.html` - Historia, valores, trayectoria y equipo.
- `contacto.html` - Información de contacto, formulario y cómo llegar.
- `styles.css` - Estilos compartidos por todas las páginas.

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
