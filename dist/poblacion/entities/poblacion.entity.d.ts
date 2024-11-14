import { Indicador } from 'src/indicador/entities/indicador.entity';
import { Zona } from 'src/zona/entities/zona.entity';
export declare class Poblacion {
    id: number;
    nombre: string;
    codigoINE: string;
    zona: Zona;
    indicadores: Indicador[];
}
