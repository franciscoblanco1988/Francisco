import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';
import { Zona } from 'src/zona/entities/zona.entity';

@Entity()
export class Poblacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    codigoINE: string;

    @ManyToOne(() => Zona, (zona) => zona.poblaciones)
    zona: Zona;

    @ManyToMany(() => Indicador, (indicador) => indicador.poblaciones)
    @JoinTable()
    indicadores: Indicador[];
}