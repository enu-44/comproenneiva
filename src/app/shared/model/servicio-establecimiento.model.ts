export interface IServicioEstablecimiento {
  id?: number;
  establecimientoId?: number;
  servicioId?: number;
}

export class ServicioEstablecimiento implements IServicioEstablecimiento {
  constructor(public id?: number, public establecimientoId?: number, public servicioId?: number) {}
}
