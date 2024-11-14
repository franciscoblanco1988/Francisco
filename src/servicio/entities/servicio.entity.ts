import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';

@Entity()
export class Servicio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    nombre_servicio: string;

    @OneToMany(() => Indicador, (indicador) => indicador.servicio)
    indicadores: Indicador[];
}
