export interface ICalendario {
  id?: number;
  abierto?: boolean;
  establecimientoId?: number;
  diaSemanaId?: number;
}

export class Calendario implements ICalendario {
  constructor(public id?: number, public abierto?: boolean, public establecimientoId?: number, public diaSemanaId?: number) {
    this.abierto = this.abierto || false;
  }
}
