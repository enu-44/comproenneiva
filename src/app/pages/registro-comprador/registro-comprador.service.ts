import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUsuario } from '../../shared/model/usuario.model';
import { createRequestOption } from '../../shared/util/request-util';

type EntityResponseType = HttpResponse<IUsuario>;
type EntityArrayResponseType = HttpResponse<IUsuario[]>;

@Injectable({
  providedIn: 'root'
})
export class RegistroCompradorService {

  public resourceUrl = environment.api + '/usuarios';

  constructor(protected http: HttpClient) { }

  createComprador(usuario: IUsuario): Observable<EntityResponseType> {
    return this.http.post<IUsuario>(this.resourceUrl, usuario, { observe: 'response' });
  }

  updateComprador(usuario: IUsuario): Observable<EntityResponseType> {
    return this.http.put<IUsuario>(this.resourceUrl, usuario, { observe: 'response' });
  }

  findCompradorById(id: number): Observable<EntityResponseType> {
    return this.http.get<IUsuario>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  listCompradores(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUsuario[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  deleteComprador(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
