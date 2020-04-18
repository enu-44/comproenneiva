export interface IUsuario {
  id?: number;
  celular1?: string;
  celular2?: string;
  direccion?: string;
  email?: string;
  login?: string;
  firstName?: string;
  lastName?: string;
  latitud?: number;
  longitud?: number;
  municipioId?: number;
  numDocumento?: string;
  segundoApellido?: string;
  segundoNombre?: string;
  tipoDocumentoId?: number;
}

export class Usuario implements IUsuario {
  constructor(
    public id?: number,
    public celular1?: string,
    public celular2?: string,
    public direccion?: string,
    public email?: string,
    public login?: string,
    public firstName?: string,
    public lastName?: string,
    public latitud?: number,
    public longitud?: number,
    public municipioId?: number,
    public numDocumento?: string,
    public segundoApellido?: string,
    public segundoNombre?: string,
    public tipoDocumentoId?: number
  ) {}
}
