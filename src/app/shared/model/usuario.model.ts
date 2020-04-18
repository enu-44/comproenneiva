export interface IUsuario {
  id?: number;
  segundoNombre?: string;
  segundoApellido?: string;
  numDocumento?: string;
  direccion?: string;
  celular1?: string;
  celular2?: string;
  latitud?: number;
  longitud?: number;
  userId?: number;
  tipoDocumentoId?: number;
  municipioId?: number;
}

export class Usuario implements IUsuario {
  constructor(
    public id?: number,
    public segundoNombre?: string,
    public segundoApellido?: string,
    public numDocumento?: string,
    public direccion?: string,
    public celular1?: string,
    public celular2?: string,
    public latitud?: number,
    public longitud?: number,
    public userId?: number,
    public tipoDocumentoId?: number,
    public municipioId?: number
  ) {}
}
