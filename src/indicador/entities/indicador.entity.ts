import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { TipoIndicador } from 'src/tipo_indicador/entities/tipo_indicador.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { UnidadDeMedida } from 'src/unidad_medida/entities/unidad_medida.entity';
import { Poblacion } from 'src/poblacion/entities/poblacion.entity';
import { Periodicidad } from 'src/periodicidad/entities/periodicidad.entity';

@Entity()
export class Indicador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    comentario: string;

    @Column()
    nombre: string;

    @ManyToOne(() => TipoIndicador, (tipoIndicador) => tipoIndicador.indicadores)
    tipoIndicador: TipoIndicador;

    @ManyToOne(() => Servicio, (servicio) => servicio.indicadores)
    servicio: Servicio;

    @ManyToOne(() => UnidadDeMedida, (unidadMedida) => unidadMedida.indicadores)
    unidadDeMedida: UnidadDeMedida;

    @ManyToMany(() => Poblacion, poblacion => poblacion.indicadores)
    poblaciones: Poblacion[];

    @ManyToOne(() => Periodicidad, periodicidad => periodicidad.indicadores)
    periodicidad: Periodicidad;
}