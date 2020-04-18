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
            valida: true,
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
        valida: true,
        horaInicio: { hour: 0, minute: 0 },
        horaFin: { hour: 0, minute: 0 }
      }
    )
  }

  rangoHorasVaido(indexDia, indexJornada) {
    let jornadaValida = false;
    const horaInicio = `${this.dias[indexDia].jornadas[indexJornada].horaInicio.hour}${this.dias[indexDia].jornadas[indexJornada].horaInicio.minute < 10 ? `0${this.dias[indexDia].jornadas[indexJornada].horaInicio.minute}` : this.dias[indexDia].jornadas[indexJornada].horaInicio.minute }`;
    const horaFin = `${this.dias[indexDia].jornadas[indexJornada].horaFin.hour}${this.dias[indexDia].jornadas[indexJornada].horaFin.minute < 10 ? `0${this.dias[indexDia].jornadas[indexJornada].horaFin.minute}` : this.dias[indexDia].jornadas[indexJornada].horaFin.minute }`;
    
    if ( Number(horaInicio) < Number(horaFin) ) {
      jornadaValida = true;
    }

    this.dias[indexDia].jornadas[indexJornada].valida = jornadaValida;

  }

}
