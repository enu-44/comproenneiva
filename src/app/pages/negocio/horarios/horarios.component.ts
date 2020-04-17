import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  dias: any [] = [];
  @Output() diaGuardado = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.dias.push(
      {
        nombre: 'lunes',
        jornadas: []
      },
      {
        nombre: 'martes',
        jornadas: []
      },
      {
        nombre: 'miercoles',
        jornadas: [
          {
            horaInicio: { hour: 8, minute: 0 },
            horaFin: { hour: 11, minute: 59 }
          },
        ]
      },
      {
        nombre: 'jueves',
        jornadas: []
      },
      {
        nombre: 'viernes',
        jornadas: []
      },
      {
        nombre: 'sábado',
        jornadas: []
      },
      {
        nombre: 'domingo',
        jornadas: []
      },
    )

  }

  guardarDia(indexDia: number) {
    this.diaGuardado.emit(this.dias[indexDia])
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
