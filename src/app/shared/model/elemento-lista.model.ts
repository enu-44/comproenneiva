export interface IElementoLista {
  id?: number;
  name?: string;
  codigo?: string;
  propiedades?: string;
  padreId?: number;
  padreNombre?: string;
  tipoListaId?: number;
  tipoListaNombre?: string;
}

export class ElementoLista implements IElementoLista {
  constructor(
    public id?: number,
    public name?: string,
    public codigo?: string,
    public propiedades?: string,
    public padreId?: number,
    public tipoListaId?: number,
    public padreNombre?: string,
    public tipoListaNombre?: string
  ) {}
}
