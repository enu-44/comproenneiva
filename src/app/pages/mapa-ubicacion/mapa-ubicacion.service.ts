import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaUbicacionService {

  puntoSeleccionado = new BehaviorSubject<any>({});

  constructor() { }
}
