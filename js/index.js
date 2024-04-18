import { marker } from "./marker.js";
import { createMarkerHtmlElement } from "./markerElement.js";

window.coords = [];
window.myCoords = {};

const MY_API_KEY = "Szg61Iux3fdYWGRlGLWEGY8boFiiS2Sg";

var map = tt.map({
  key: MY_API_KEY,
  container: "map",
});

const geolocationControl = new tt.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
  showUserLocation: true,
});

geolocationControl.on("geolocate", (event) => {
  window.myCoords.lng = event.coords.longitude;
  window.myCoords.lat = event.coords.latitude;
});

map.addControl(geolocationControl);

map.once("click", (event) => {
  window.coords.push({ ...event.lngLat });
  marker(map, event, createMarkerHtmlElement());
});

const ttDrawingTools = new tt.plugins.DrawingTools({
  ttMapsSdk: tt,
  controls: {
    ellipse: false,
    pen: false,
    polygon: false,
    rectangle: false,
    select: false,
  },
});

map.addControl(ttDrawingTools, "top-left");

const button = document.getElementById("button");
console.log({ button });
button.addEventListener("click", () => {
  const routeCoords = `${String(window.myCoords.lat).slice(0, 8)},${String(
    window.myCoords.lng
  ).slice(0, 8)}:${String(window.coords[0].lat).slice(0, 8)},${String(
    window.coords[0].lng
  ).slice(0, 8)}`;
  tt.services
    .calculateRoute({
      key: MY_API_KEY,
      locations: [
        new tt.LngLat(window.myCoords.lng, window.myCoords.lat),
        new tt.LngLat(window.coords[0].lng, window.coords[0].lat),
      ],
    })
    .then((res) => {
      const geoJson = res.toGeoJson();
      map.addLayer({
        id: "red",
        type: "line",
        source: {
          type: "geojson",
          data: geoJson,
        },
        paint: {
          "line-color": "red",
          "line-width": 6,
        },
      });
      return res.toGeoJson();
    });
});
