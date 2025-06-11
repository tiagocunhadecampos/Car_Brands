export interface Brand {
  codigo: string;
  nome: string;
}

export type CarBrand = Brand;

export interface CarModel {
  codigo: string;
  nome: string;
}

export interface CarModelsResponse {
  modelos: CarModel[];
}
