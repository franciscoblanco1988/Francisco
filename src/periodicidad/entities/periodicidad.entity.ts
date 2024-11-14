import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';

@Entity()
export class Periodicidad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;

    @OneToMany(() => Indicador, indicador => indicador.periodicidad)
    indicadores: Indicador[];
}
