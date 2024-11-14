import { TipoIndicador } from 'src/tipo_indicador/entities/tipo_indicador.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { UnidadDeMedida } from 'src/unidad_medida/entities/unidad_medida.entity';
import { Poblacion } from 'src/poblacion/entities/poblacion.entity';
import { Periodicidad } from 'src/periodicidad/entities/periodicidad.entity';
export declare class Indicador {
    id: number;
    codigo: string;
    comentario: string;
    nombre: string;
    tipoIndicador: TipoIndicador;
    servicio: Servicio;
    unidadDeMedida: UnidadDeMedida;
    poblaciones: Poblacion[];
    periodicidad: Periodicidad;
}
