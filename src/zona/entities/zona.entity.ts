import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Poblacion } from 'src/poblacion/entities/poblacion.entity';

@Entity()
export class Zona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(() => Poblacion, (poblacion) => poblacion.zona)
    poblaciones: Poblacion[];
}
