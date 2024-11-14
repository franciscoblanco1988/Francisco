import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';

@Entity()
export class UnidadDeMedida {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(() => Indicador, (indicador) => indicador.unidadDeMedida)
    indicadores: Indicador[];
}
