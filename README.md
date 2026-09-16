# SUPER CVORT

Página web del vivero Verde Andino.

## Estructura

- `index.html` - Una sola página con 4 vistas (Inicio, Catálogo, Nosotros, Contáctanos) y carrusel de videos, todo con HTML + CSS puro (sin JavaScript para la navegación).
- `styles.css` - Estilos del sitio.

## Mejora visual (Inicio y Contáctanos)

Se mantiene la misma paleta, tipografía Arial y la navegación CSS-only; solo se agregó profundidad y contraste para que el sitio no se vea apagado:

- **Inicio:** nueva portada (`hero`) con la foto del vivero, título, dos botones que llevan al catálogo y al contacto, y una fila de datos (variedades, hectáreas, años). Misión y Visión pasan a tarjetas con icono, la lista de plantas nativas se convierte en fichas con foto y la galería tiene tarjetas con etiqueta, sombra y zoom suave de la imagen.
- **Contáctanos:** encabezado con foto de fondo y accesos rápidos (teléfono, correo, horario), datos de contacto en tarjetas con icono, formulario sobre tarjeta con foco resaltado y sección "Cómo llegar" con foto.
- El bloque de videos, el catálogo y el pie de página conservan su estructura con un acabado más definido (degradados oscuros, botones redondos y títulos con subrayado).
- `assets/img/` - Imágenes del vivero y del catálogo.
- `assets/video/` - Videos locales del carrusel.
- `enlaces-descarga.txt`, `descargar-assets.sh`, `descargar-assets.ps1` - Fuentes y scripts de los assets originales.

## Catálogo

El catálogo tiene 8 categorías (pestañas) con 18 fichas de producto en total. Cada ficha incluye foto, nombre científico, descripción, cuidados (luz, riego, tamaño, nivel), precio de referencia en COP y un botón que lleva a la vista de contacto.

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
