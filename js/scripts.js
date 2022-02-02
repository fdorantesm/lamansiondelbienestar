var map = L.map("map").setView([30.24039567602724, -95.48127949489584], 16);

L.tileLayer("https://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([30.24039567602724, -95.48127949489584])
  .addTo(map)
  .bindPopup(
    `<h1 class="marker-title">La Mansión del Bienestar</h1>
  <p>Monumento a la austeridad republicana instaurada por el presidente más honesto Andrés Manuel López Obrador. Propiedad que del 2019 al 2020 habitó el trivago mayor José Ramón López Beltrán. Está valuada en 19MDP y pertenece a la empresa Baker Hughes, quien es contratista de PEMEX para la refinería de Dos Bocas. Esta propiedad goza de otras comodidades como son: bar, sala de juegos, cine en casa y una alberca que tiene vista al bosque </p>`
  )
  .openPopup();
