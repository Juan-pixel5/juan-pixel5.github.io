#!/bin/sh
set -e
echo "Creando carpetas..."
mkdir -p assets/img assets/video
echo "Descargando imagenes..."
curl -L --retry 3 -o assets/img/palma-cera.jpg "https://images.pexels.com/photos/15699946/pexels-photo-15699946.jpeg?auto=compress&cs=tinysrgb&w=1200"
curl -L --retry 3 -o assets/img/orquidea-cattleya.jpg "https://images.pexels.com/photos/8280971/pexels-photo-8280971.jpeg?auto=compress&cs=tinysrgb&w=1200"
curl -L --retry 3 -o assets/img/helecho-culantrillo.jpg "https://images.pexels.com/photos/12659072/pexels-photo-12659072.jpeg?auto=compress&cs=tinysrgb&w=1200"
curl -L --retry 3 -o assets/img/bromelia-guzmania.jpg "https://images.pexels.com/photos/1252896/pexels-photo-1252896.jpeg?auto=compress&cs=tinysrgb&w=1200"
curl -L --retry 3 -o assets/img/suculenta-corona-fraile.jpg "https://images.pexels.com/photos/37992842/pexels-photo-37992842.jpeg?auto=compress&cs=tinysrgb&w=1200"
curl -L --retry 3 -o assets/img/vivero.jpg "https://images.pexels.com/photos/6777855/pexels-photo-6777855.jpeg?auto=compress&cs=tinysrgb&w=1200"
echo "Descargando miniatura del video..."
curl -L --retry 3 -o assets/video/palmas-cocora.jpg "https://img.youtube.com/vi/Es7NnI8WI3Y/maxresdefault.jpg"
echo "Cambiando index.html a rutas locales..."
sed -i.bak \
 -e 's|https://images\.pexels\.com/photos/15699946/[^"]*|assets/img/palma-cera.jpg|g' \
 -e 's|https://images\.pexels\.com/photos/8280971/[^"]*|assets/img/orquidea-cattleya.jpg|g' \
 -e 's|https://images\.pexels\.com/photos/12659072/[^"]*|assets/img/helecho-culantrillo.jpg|g' \
 -e 's|https://images\.pexels\.com/photos/1252896/[^"]*|assets/img/bromelia-guzmania.jpg|g' \
 -e 's|https://images\.pexels\.com/photos/37992842/[^"]*|assets/img/suculenta-corona-fraile.jpg|g' \
 -e 's|https://images\.pexels\.com/photos/6777855/[^"]*|assets/img/vivero.jpg|g' \
 index.html
rm -f index.html.bak
echo "Listo. Imagenes en assets/img y miniatura en assets/video."
