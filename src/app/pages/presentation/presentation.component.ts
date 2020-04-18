import { Component, OnInit } from "@angular/core";
import { AccountService } from 'src/app/core/auth/account.service';
import { EstablecimientoService } from '../negocio/establecimiento.service';
import { IEstablecimiento } from 'src/app/shared/model/establecimiento.model';
import { ITEMS_PER_PAGE } from 'src/app/shared/constants/pagination.constants';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.scss"]
})
export class PresentationComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;

  // google maps zoom level
  zoom: number = 17;
  // initial center position for the map
  lat: number = 2.934336;
  lng: number = -75.280828;

  customStyle = [{
    // featureType: 'all',
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }
    ]
  }];


  establecimientos: IEstablecimiento[] = [];

  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate: string = "id";
  ascending!: boolean;
  ngbPaginationPage = 1;

  markers: marker[] = []


  constructor(private accountService: AccountService, private establecimientoService:EstablecimientoService) {}

  ngOnInit() {
    this.loadPage(1)
  }

  loadPage(page?: number): void {
    const pageToLoad: number = page || this.page;
    this.establecimientoService
      .query({
        page: pageToLoad - 1,
        size: 1000,
        sort: this.sort()
      })
      .subscribe(
        (res: HttpResponse<IEstablecimiento[]>) => {
          this.markers = res.body.map((item)=>{
            let newMarker: marker ={
              model: item,
              lat: item.latitud,
              lng: item.longitud,
              nombre: item.nombre,
              draggable: false,
              icon: this.getIcon(item.tipoEstablecimiento.tipoListaNombre)
            }
            return newMarker
          })
        },
        () => {}
      );
  }

  getIcon(tipo):string{
    switch(tipo.toLowerCase()){
      case "Restaurante".toLowerCase():
        return "/assets/img/comida.png";
      break;
      case "Ventas".toLowerCase():
        return "/assets/img/tienda.png";
      break;
      case "Banco".toLowerCase():
        return "/assets/img/banco.png";
      break;
      case "Servicios especiales".toLowerCase():
        return "/assets/img/super.png";
      break;
      default:
        return "/assets/img/farma.png";
      break;
    }
  }

  
  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }
  

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  


  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }
}

// just an interface for type safety.
interface marker {
  model: any;
	lat: number;
	lng: number;
  draggable: boolean;
  icon: string;
  nombre: string;
}
