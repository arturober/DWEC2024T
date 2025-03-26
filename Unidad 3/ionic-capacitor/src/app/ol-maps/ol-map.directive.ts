import { afterNextRender, afterRenderEffect, Directive, ElementRef, inject, input } from '@angular/core';
import { View, Map, Feature } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from 'ol/proj';
import { Geometry } from 'ol/geom';


@Directive({
  selector: 'ol-map',
})
export class OlMapDirective {
  #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  coordinates = input.required<[number, number]>();
  zoom = input(16);

  #map!: Map;
  #view!: View;
  #vectorLayer!: VectorLayer<VectorSource>;

  get view() {
    return this.#view;
  }

  get vectorLayer() {
    return this.#vectorLayer;
  }

  constructor() {
    afterNextRender(() => { // Ejecutamos solo en cliente (SSR)
      useGeographic();

      this.#view = new View({
        center: this.coordinates(),
        zoom: this.zoom(),
      });

      this.#map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: this.#elementRef.nativeElement,
        view: this.#view,
      });

      this.#vectorLayer = new VectorLayer<VectorSource>({
        map: this.#map,
        source: new VectorSource<Feature<Geometry>>({
          features: [],
        }),
      });
    });

    afterRenderEffect(() => { // Cada vez que cambien las coordenadas
      this.#view.setCenter(this.coordinates());
    });
  }

}
