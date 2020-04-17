import { TestBed } from '@angular/core/testing';

import { MapaUbicacionService } from './mapa-ubicacion.service';

describe('MapaUbicacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapaUbicacionService = TestBed.get(MapaUbicacionService);
    expect(service).toBeTruthy();
  });
});
