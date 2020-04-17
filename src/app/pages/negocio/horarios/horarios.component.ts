import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  dias: any [] = [];

  constructor() { }

  ngOnInit() {
    this.dias.push(
      {
        nombre: 'lunes',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      },
      {
        nombre: 'martes',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      },
      {
        nombre: 'miercoles',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
          {
            horaInicio: { hour: 0, minute: 0 },
            horaFin: { hour: 0, minute: 0 }
          },
          {
            horaInicio: { hour: 19, minute: 0 },
            horaFin: { hour: 3, minute: 0 }
          }
        ]
      }
    )

  }

  eliminarHora(indexDia: number, indexJornada: number) {
    this.dias[indexDia].jornadas.splice(indexJornada, 1)
  }

  agregarJornada(indexDia) {
    this.dias[indexDia].jornadas.push(
      {
        horaInicio: { hour: 0, minute: 0 },
        horaFin: { hour: 0, minute: 0 }
      }
    )
  }

}
