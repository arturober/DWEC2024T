import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import { Point } from "ol/geom";
import { useGeographic } from "ol/proj";
import { MapService } from "./classes/map-service";
import { MyGeolocation } from "./my-geolocation";

useGeographic();

async function showMap() {
  const coords = await MyGeolocation.getLocation();

  const mapService = new MapService(coords, "map");
  const marker = mapService.createMarker(coords);

  const autocomplete = new GeocoderAutocomplete(
    document.getElementById("autocomplete")!,
    "42c7710f83bc41698b841fec7a3b5d2d",
    { lang: "es", debounceDelay: 600}
  );

  autocomplete.on("select", (location) => {
    marker.setGeometry(new Point(location.geometry.coordinates));
    mapService.view.setCenter(location.geometry.coordinates);
  });
}

showMap();
