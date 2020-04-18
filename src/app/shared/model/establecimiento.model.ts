import { IElementoLista } from './elemento-lista.model';

export interface IEstablecimiento {
  id?: number;
  nombre?: string;
  documento?: number;
  direccion?: string;
  email?: string;
  telefono?: string;
  celular?: string;
  principal?: boolean;
  afiliadoCC?: boolean;
  latitud?: number;
  longitud?: number;
  propiedades?: string;
  valorRazonSocial?: string;
  tipoEstablecimientoId?: number;
  tipoDocumentoId?: number;
  municipioId?: number;
  usuarioId?: number;
  padreId?: number;
  razonSocialId?: number;
  tipoEstablecimiento: IElementoLista;
}

export class Establecimiento implements IEstablecimiento {
  constructor(
    public id?: number,
    public nombre?: string,
    public documento?: number,
    public direccion?: string,
    public email?: string,
    public telefono?: string,
    public celular?: string,
    public principal?: boolean,
    public afiliadoCC?: boolean,
    public latitud?: number,
    public longitud?: number,
    public propiedades?: string,
    public valorRazonSocial?: string,
    public tipoEstablecimientoId?: number,
    public tipoDocumentoId?: number,
    public municipioId?: number,
    public usuarioId?: number,
    public padreId?: number,
    public razonSocialId?: number
    
  ) {
    this.principal = this.principal || false;
    this.afiliadoCC = this.afiliadoCC || false;
  }
  tipoEstablecimiento: IElementoLista;
}
