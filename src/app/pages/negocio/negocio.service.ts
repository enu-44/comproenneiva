import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IEstablecimiento } from '../../shared/model/establecimiento.model';
import { IHorario } from '../../shared/model/horario.model';
import { ICalendario } from '../../shared/model/calendario.model';
import { IServicioEstablecimiento } from '../../shared/model/servicio-establecimiento.model';
import { createRequestOption } from '../../shared/util/request-util';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

type EntityResponseType = HttpResponse<IEstablecimiento>;
type EntityArrayResponseType = HttpResponse<IEstablecimiento[]>;


@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  public resourceUrl = environment.api + '/establecimientos';

  public resourceUrlHorario = environment.api + '/horarios';

  public resourceUrlServicio = environment.api + '/servicio-establecimientos';

  public resourceUrlCalendario = environment.api + '/calendarios';

  constructor(protected http: HttpClient) { }

  //-----------------INICIO ESTABLECIMIENTO----------------------------  
  createEstablecimiento(establecimiento: IEstablecimiento): Observable<EntityResponseType> {
    return this.http.post<IEstablecimiento>(this.resourceUrl, establecimiento, { observe: 'response' });
  }

  updateEstablecimiento(establecimiento: IEstablecimiento): Observable<EntityResponseType> {
    return this.http.put<IEstablecimiento>(this.resourceUrl, establecimiento, { observe: 'response' });
  }

  findEstablecimientoById(id: number): Observable<EntityResponseType> {
    return this.http.get<IEstablecimiento>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  listEstablecimientos(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IEstablecimiento[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  deleteEstablecimiento(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  //-----------------FIN ESTABLECIMIENTO----------------------------  

  //-----------------INICIO SERVICIO ESTABLECIMIENTO---------------------------------
  createServicioEstablecimiento(servicioEstablecimiento: IServicioEstablecimiento): Observable<HttpResponse<IServicioEstablecimiento>> {
    return this.http.post<IServicioEstablecimiento>(this.resourceUrlServicio, servicioEstablecimiento, { observe: 'response' });
  }

  updateServicioEstablecimiento(servicioEstablecimiento: IServicioEstablecimiento): Observable<HttpResponse<IServicioEstablecimiento>> {
    return this.http.put<IServicioEstablecimiento>(this.resourceUrlServicio, servicioEstablecimiento, { observe: 'response' });
  }

  findServicioEstablecimientoById(id: number): Observable<HttpResponse<IServicioEstablecimiento>> {
    return this.http.get<IServicioEstablecimiento>(`${this.resourceUrlServicio}/${id}`, { observe: 'response' });
  }

  listServiciosEstablecimientos(req?: any): Observable<HttpResponse<IServicioEstablecimiento[]>> {
    const options = createRequestOption(req);
    return this.http.get<IServicioEstablecimiento[]>(this.resourceUrlServicio, { params: options, observe: 'response' });
  }

  deleteServicioEstablecimiento(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrlServicio}/${id}`, { observe: 'response' });
  }
  //-----------------FIN SERVICIO ESTABLECIMIENTO---------------------------------



  //-----------------INICIO HORARIO---------------------------------
  createHorario(horario: IHorario): Observable<HttpResponse<IHorario>> {
    const copy = this.convertDateFromClient(horario);
    return this.http
      .post<IHorario>(this.resourceUrlHorario, copy, { observe: 'response' })
      .pipe(map((res: HttpResponse<IHorario>) => this.convertDateFromServer(res)));
  }

  updateHorario(horario: IHorario): Observable<HttpResponse<IHorario>> {
    const copy = this.convertDateFromClient(horario);
    return this.http
      .put<IHorario>(this.resourceUrlHorario, copy, { observe: 'response' })
      .pipe(map((res: HttpResponse<IHorario>) => this.convertDateFromServer(res)));
  }

  findHorarioById(id: number): Observable<HttpResponse<IHorario>> {
    return this.http
      .get<IHorario>(`${this.resourceUrlHorario}/${id}`, { observe: 'response' })
      .pipe(map((res: HttpResponse<IHorario>) => this.convertDateFromServer(res)));
  }

  listHorarios(req?: any): Observable<HttpResponse<IHorario[]>> {
    const options = createRequestOption(req);
    return this.http
      .get<IHorario[]>(this.resourceUrlHorario, { params: options, observe: 'response' })
      .pipe(map((res: HttpResponse<IHorario[]>) => this.convertDateArrayFromServer(res)));
  }

  deleteHorario(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrlHorario}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(horario: IHorario): IHorario {
    const copy: IHorario = Object.assign({}, horario, {
      horaInicio: horario.horaInicio && horario.horaInicio.isValid() ? horario.horaInicio.toJSON() : undefined,
      horaFin: horario.horaFin && horario.horaFin.isValid() ? horario.horaFin.toJSON() : undefined
    });
    return copy;
  }

  protected convertDateFromServer(res: HttpResponse<IHorario>): HttpResponse<IHorario> {
    if (res.body) {
      res.body.horaInicio = res.body.horaInicio ? moment(res.body.horaInicio) : undefined;
      res.body.horaFin = res.body.horaFin ? moment(res.body.horaFin) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: HttpResponse<IHorario[]>): HttpResponse<IHorario[]> {
    if (res.body) {
      res.body.forEach((horario: IHorario) => {
        horario.horaInicio = horario.horaInicio ? moment(horario.horaInicio) : undefined;
        horario.horaFin = horario.horaFin ? moment(horario.horaFin) : undefined;
      });
    }
    return res;
  }
  //-----------------FIN HORARIO---------------------------------

  //-----------------INICIO CALENDARIO---------------------------------
  createCalendario(calendario: ICalendario): Observable<HttpResponse<ICalendario>> {
    return this.http.post<ICalendario>(this.resourceUrlCalendario, calendario, { observe: 'response' });
  }

  updateCalendario(calendario: ICalendario): Observable<HttpResponse<ICalendario>> {
    return this.http.put<ICalendario>(this.resourceUrlCalendario, calendario, { observe: 'response' });
  }

  findCalendarioById(id: number): Observable<HttpResponse<ICalendario>> {
    return this.http.get<ICalendario>(`${this.resourceUrlCalendario}/${id}`, { observe: 'response' });
  }

  listCalendarios(req?: any): Observable<HttpResponse<ICalendario[]>> {
    const options = createRequestOption(req);
    return this.http.get<ICalendario[]>(this.resourceUrlCalendario, { params: options, observe: 'response' });
  }

  deleteCalendario(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrlCalendario}/${id}`, { observe: 'response' });
  }
  //-----------------FIN CALENDARIO---------------------------------
}
