import { Component, OnInit, Inject } from '@angular/core';
import { MapaUbicacionService } from './mapa-ubicacion.service';
import { BehaviorSubject } from 'rxjs';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
  selector: 'app-mapa-ubicacion',
  templateUrl: './mapa-ubicacion.component.html',
  styleUrls: ['./mapa-ubicacion.component.scss']
})
export class MapaUbicacionComponent implements OnInit {

  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  lat: number = 2.934336;
  lng: number = -75.280828;

  ubicacionSeleccionada: marker = 
	  {
		  lat: 2.934336,
		  lng: -75.280828,
		  label: 'A',
		  draggable: true
    }
    
   /*  labelOptions = {
      color: '#ee4646',
      fontFamily: '',
      fontSize: '10px',
      fontWeight: 'bold',
      letterSpacing:'0.5px',
      text: 'Plan Pagado/No pagado'
    } */

  constructor(public serviceUbicacion: MapaUbicacionService) { }

  ngOnInit() {
    this.serviceUbicacion.puntoSeleccionado.next({
      'lat':this.ubicacionSeleccionada.lat,
      'lng':this.ubicacionSeleccionada.lng
    }) 
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  placeMarker($event){
    this.ubicacionSeleccionada.lat= $event.coords.lat;
    this.ubicacionSeleccionada.lng= $event.coords.lng;
    // this.serviceUbicacion.updateUbicacion(this.ubicacionSeleccionada)

    this.serviceUbicacion.puntoSeleccionado.next({
      'lat':$event.coords.lat,
      'lng':$event.coords.lng
    }) 
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

export class LugaresComponent{
  // declaraciones
  labelOptions = {
    color: '#ee4646',
    fontFamily: '',
    fontSize: '10px',
    fontWeight: 'bold',
    letterSpacing:'0.5px',
    text: 'Plan Pagado/No pagado'
  }
  // ... más definiciones y resto del cuerpo del Typescript (constructor y métodos).
}