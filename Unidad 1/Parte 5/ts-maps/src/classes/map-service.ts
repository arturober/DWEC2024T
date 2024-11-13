import { View, Map, Feature } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { Geometry, Point } from "ol/geom";
import { useGeographic } from "ol/proj";
import { Coordinates } from "../interfaces/coordinates";

export class MapService {
  #map: Map;
  #view: View;
  #vectorLayer: VectorLayer<VectorSource>;

  constructor({ latitude, longitude }: Coordinates, divMapId: string) {
    useGeographic();

    this.#view = new View({
      center: [longitude, latitude],
      zoom: 16,
    });

    this.#map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: divMapId,
      view: this.#view,
    });

    this.#vectorLayer = new VectorLayer<VectorSource>({
      map: this.#map,
      source: new VectorSource<Feature<Geometry>>({
        features: [],
      }),
    });
  }

  get view() {
    return this.#view;
  }

  createMarker(
    { latitude, longitude }: Coordinates,
    color = "#3399CC",
    fill = "#fff"
  ) {
    const positionFeature = new Feature({
      geometry: new Point([longitude, latitude]),
    });
    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 9,
          fill: new Fill({
            color: color,
          }),
          stroke: new Stroke({
            color: fill,
            width: 3,
          }),
        }),
      })
    );

    this.#vectorLayer.getSource()?.addFeature(positionFeature);

    return positionFeature;
  }
}
