interface Indicadores {
  version: string;
  autor: string;
  fecha: string;
  indicador:Indicador[]

}

interface Indicador {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}