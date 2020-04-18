export interface ITipoLista {
  id?: number;
  name?: string;
  sigla?: string;
  propiedades?: string;
  padreId?: number;
  padreNombre?: string;
}

export class TipoLista implements ITipoLista {
  constructor(
    public id?: number,
    public name?: string,
    public sigla?: string,
    public propiedades?: string,
    public padreId?: number,
    public padreNombre?: string
  ) {}
}
