export const marker = (map, event, element) => {
  new tt.Marker({ draggable: true, element: element })
    .setLngLat(event.lngLat)
    .addTo(map)
    .on("mousedown", () => console.log("marker was clicked"));
};
