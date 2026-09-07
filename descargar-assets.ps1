$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path "assets/img" | Out-Null
New-Item -ItemType Directory -Force -Path "assets/video" | Out-Null
Invoke-WebRequest -Uri "https://images.pexels.com/photos/15699946/pexels-photo-15699946.jpeg?auto=compress&cs=tinysrgb&w=1200" -OutFile "assets/img/palma-cera.jpg"
Invoke-WebRequest -Uri "https://images.pexels.com/photos/8280971/pexels-photo-8280971.jpeg?auto=compress&cs=tinysrgb&w=1200" -OutFile "assets/img/orquidea-cattleya.jpg"
Invoke-WebRequest -Uri "https://images.pexels.com/photos/12659072/pexels-photo-12659072.jpeg?auto=compress&cs=tinysrgb&w=1200" -OutFile "assets/img/helecho-culantrillo.jpg"
Invoke-WebRequest -Uri "https://images.pexels.com/photos/1252896/pexels-photo-1252896.jpeg?auto=compress&cs=tinysrgb&w=1200" -OutFile "assets/img/bromelia-guzmania.jpg"
Invoke-WebRequest -Uri "https://images.pexels.com/photos/37992842/pexels-photo-37992842.jpeg?auto=compress&cs=tinysrgb&w=1200" -OutFile "assets/img/suculenta-corona-fraile.jpg"
Invoke-WebRequest -Uri "https://images.pexels.com/photos/6777855/pexels-photo-6777855.jpeg?auto=compress&cs=tinysrgb&w=1200" -OutFile "assets/img/vivero.jpg"
Invoke-WebRequest -Uri "https://img.youtube.com/vi/Es7NnI8WI3Y/maxresdefault.jpg" -OutFile "assets/video/palmas-cocora.jpg"
$html = [IO.File]::ReadAllText("$PWD/index.html")
$html = $html -replace 'https://images\.pexels\.com/photos/15699946/[^"]*', 'assets/img/palma-cera.jpg'
$html = $html -replace 'https://images\.pexels\.com/photos/8280971/[^"]*', 'assets/img/orquidea-cattleya.jpg'
$html = $html -replace 'https://images\.pexels\.com/photos/12659072/[^"]*', 'assets/img/helecho-culantrillo.jpg'
$html = $html -replace 'https://images\.pexels\.com/photos/1252896/[^"]*', 'assets/img/bromelia-guzmania.jpg'
$html = $html -replace 'https://images\.pexels\.com/photos/37992842/[^"]*', 'assets/img/suculenta-corona-fraile.jpg'
$html = $html -replace 'https://images\.pexels\.com/photos/6777855/[^"]*', 'assets/img/vivero.jpg'
[IO.File]::WriteAllText("$PWD/index.html", $html)
Write-Host "Listo. Imagenes en assets/img y miniatura en assets/video."
