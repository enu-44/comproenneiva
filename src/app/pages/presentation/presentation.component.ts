import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.scss"]
})
export class PresentationComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  constructor() {}

  ngOnInit() {}

  // google maps zoom level
  zoom: number = 17;
  
  // initial center position for the map
  lat: number = 2.934336;
  lng: number = -75.280828;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 2.934336,
		  lng: -75.280828,
      draggable: true,
      icon: '/assets/img/banco.png',
      nombre: 'Bancolombia'
    },
    {
		  lat: 2.932567, 
		  lng: -75.280075,
      draggable: true,
      icon: '/assets/img/farma.png',
      nombre: 'Drogas la economía'
	  },
	  {
		  lat: 2.935552, 
		  lng: -75.283785,
      draggable: false,
      icon: '/assets/img/comida.png',
      nombre: 'Restaurante La avenida'
	  },
	  {
		  lat: 2.933423, 
		  lng: -75.277549,
      draggable: true,
      icon: '/assets/img/super.png',
      nombre: 'Supertiendas Olímpica'
    },
    {
		  lat: 2.933673, 
		  lng: -75.282025,
      draggable: true,
      icon: '/assets/img/notaria.png',
      nombre: 'Notaría Segunda'
    },
    {
		  lat: 2.935302, 
		  lng: -75.281236,
      draggable: true,
      icon: '/assets/img/tienda.png',
      nombre: 'Tienda la esquina'
    },
    {
		  lat: 2.936862, 
		  lng: -75.281661,
      draggable: true,
      icon: '/assets/img/tienda.png',
      nombre: 'Tienda doña lola'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  draggable: boolean;
  icon: string;
  nombre: string;
}
