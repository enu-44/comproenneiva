export interface IFotografia {
  id?: number;
  nombre?: string;
  ruta?: string;
  descripcion?: string;
  establecimientoId?: number;
}

export class Fotografia implements IFotografia {
  constructor(
    public id?: number,
    public nombre?: string,
    public ruta?: string,
    public descripcion?: string,
    public establecimientoId?: number
  ) {}
}
