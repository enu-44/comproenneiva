import { Moment } from 'moment';

export interface IHorario {
  id?: number;
  horaInicio?: Moment;
  horaFin?: Moment;
  calendarioId?: number;
}

export class Horario implements IHorario {
  constructor(public id?: number, public horaInicio?: Moment, public horaFin?: Moment, public calendarioId?: number) {}
}
