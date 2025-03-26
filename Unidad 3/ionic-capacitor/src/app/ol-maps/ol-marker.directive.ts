import { afterNextRender, afterRenderEffect, Directive, inject, input } from "@angular/core";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
import { OlMapDirective } from "./ol-map.directive";

@Directive({
  selector: 'ol-marker',
})
export class OlMarkerDirective {
  #olMap = inject(OlMapDirective); // Inyectamos Directiva del mapa (padre)
  coordinates = input.required<[number, number]>();
  color = input('red');
  fill = input('white');
  #marker!: Feature;

  constructor() {
    afterNextRender(() => {
      this.#marker = new Feature({
        geometry: new Point(this.coordinates()),
      });
      this.#marker.setStyle(
        new Style({
          image: new CircleStyle({
            radius: 9,
            fill: new Fill({
              color: this.color(),
            }),
            stroke: new Stroke({
              color: this.fill(),
              width: 3,
            }),
          }),
        })
      );

      this.#olMap.vectorLayer.getSource()?.addFeature(this.#marker);
    });

    afterRenderEffect(() => { // Cada vez que cambien las coordenadas
      this.#marker.setGeometry(new Point(this.coordinates()))
    });
  }
}
