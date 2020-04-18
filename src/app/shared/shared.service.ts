import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ITipoLista } from './model/tipo-lista.model';
import { IElementoLista } from './model/elemento-lista.model';
import { IFotografia } from './model/fotografia.model';
import { createRequestOption } from './util/request-util';

type EntityResponseType = HttpResponse<ITipoLista>;
type EntityArrayResponseType = HttpResponse<ITipoLista[]>;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public resourceUrl = environment.api + '/tipo-listas';

  public resourceUrlElementoLista = environment.api + '/elemento-listas';

  public resourceUrlFoto = environment.api + '/fotografias';

  constructor(protected http: HttpClient) { }

  //-----------------INICIO TIPO LISTA---------------------------------
  createTipoLista(tipoLista: ITipoLista): Observable<EntityResponseType> {
    return this.http.post<ITipoLista>(this.resourceUrl, tipoLista, { observe: 'response' });
  }

  updateTipoLista(tipoLista: ITipoLista): Observable<EntityResponseType> {
    return this.http.put<ITipoLista>(this.resourceUrl, tipoLista, { observe: 'response' });
  }

  findTipoListaById(id: number): Observable<EntityResponseType> {
    return this.http.get<ITipoLista>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  listTipoListas(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITipoLista[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  deleteTipoLista(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  //-----------------FIN TIPO LISTA---------------------------------

  //-----------------INICIO ELEMENTO LISTA---------------------------------
  createElementoLista(elementoLista: IElementoLista): Observable<HttpResponse<IElementoLista>> {
    return this.http.post<IElementoLista>(this.resourceUrlElementoLista, elementoLista, { observe: 'response' });
  }

  updateElementoLista(elementoLista: IElementoLista): Observable<HttpResponse<IElementoLista>> {
    return this.http.put<IElementoLista>(this.resourceUrlElementoLista, elementoLista, { observe: 'response' });
  }

  findElementoListaById(id: number): Observable<HttpResponse<IElementoLista>> {
    return this.http.get<IElementoLista>(`${this.resourceUrlElementoLista}/${id}`, { observe: 'response' });
  }

  listElementosListas(req?: any): Observable<HttpResponse<IElementoLista[]>> {
    const options = createRequestOption(req);
    return this.http.get<IElementoLista[]>(this.resourceUrlElementoLista, { params: options, observe: 'response' });
  }

  deleteElementoLista(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrlElementoLista}/${id}`, { observe: 'response' });
  }
  //-----------------FIN ELEMENTO LISTA---------------------------------

  //-----------------INICIO FOTOGRAFIA---------------------------------
  createFotografia(fotografia: IFotografia): Observable<HttpResponse<IFotografia>> {
    return this.http.post<IFotografia>(this.resourceUrlFoto, fotografia, { observe: 'response' });
  }

  updateFotografia(fotografia: IFotografia): Observable<HttpResponse<IFotografia>> {
    return this.http.put<IFotografia>(this.resourceUrlFoto, fotografia, { observe: 'response' });
  }

  findFotografiaById(id: number): Observable<HttpResponse<IFotografia>> {
    return this.http.get<IFotografia>(`${this.resourceUrlFoto}/${id}`, { observe: 'response' });
  }

  listFotografias(req?: any): Observable<HttpResponse<IFotografia[]>> {
    const options = createRequestOption(req);
    return this.http.get<IFotografia[]>(this.resourceUrlFoto, { params: options, observe: 'response' });
  }

  deleteFotografia(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrlFoto}/${id}`, { observe: 'response' });
  }
  //-----------------FIN FOTOGRAFIA---------------------------------
}
