import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { createRequestOption } from '../../shared/util/request-util';
import { IEstablecimiento } from '../../shared/model/establecimiento.model';

type EntityResponseType = HttpResponse<IEstablecimiento>;
type EntityArrayResponseType = HttpResponse<IEstablecimiento[]>;

@Injectable({ providedIn: 'root' })
export class EstablecimientoService {
  public resourceUrl = environment.api + '/establecimientos';

  constructor(protected http: HttpClient) {}

  create(establecimiento: IEstablecimiento): Observable<EntityResponseType> {
    return this.http.post<IEstablecimiento>(this.resourceUrl, establecimiento, { observe: 'response' });
  }

  update(establecimiento: IEstablecimiento): Observable<EntityResponseType> {
    return this.http.put<IEstablecimiento>(this.resourceUrl, establecimiento, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEstablecimiento>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IEstablecimiento[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}