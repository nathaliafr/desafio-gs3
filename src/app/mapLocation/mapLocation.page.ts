import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeolocationPosition } from '@capacitor/geolocation';
import { Geolocation } from '@capacitor/geolocation';
import { Icon, icon } from 'leaflet';

import * as L from 'leaflet';


@Component({
  selector: 'app-map-location',
  templateUrl: 'mapLocation.page.html',
  styleUrls: ['mapLocation.page.scss']
})
export class MapLocationPage {


  @ViewChild('map', { static: true }) mapContainer!: ElementRef ;

  
  private map!: L.Map;
  private currentPosition: GeolocationPosition | undefined;




  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  ngAfterViewInit() {
    this.loadMap();
  }
  loadMap() {

   const customIcon: Icon = icon({
      iconUrl: 'assets/icon/favicon.png',
      iconSize: [32, 32],     // Tamanho do ícone
      iconAnchor: [16, 32],   // Ponto de ancoragem do ícone
    });

    const customIconUser: Icon = icon({
      iconUrl: 'assets/icon/usuario.png',
      iconSize: [32, 32],     // Tamanho do ícone
      iconAnchor: [16, 32],   // Ponto de ancoragem do ícone
    });

    Geolocation.getCurrentPosition()
      .then((position) => {
        this.currentPosition = position;

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
 
        this.map = L.map(this.mapContainer.nativeElement).setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; OpenStreetMap contributors',
          maxZoom: 18
        }).addTo(this.map);

        // Plotar pontos adicionais

        const point = L.marker([lat , lng ] ,{icon: customIconUser }).addTo(this.map);
        const pointA = L.marker([lat + 0.01, lng + 0.01],{icon: customIcon }).addTo(this.map);
        const pointB = L.marker([lat - 0.01, lng - 0.01],{icon: customIcon }).addTo(this.map);
      })
      .catch((error) => {
        console.log('Erro ao obter localização', error);
      });
  }

}
