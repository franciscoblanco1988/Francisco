// src/tipo-indicador/entities/tipo-indicador.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';

@Entity()
export class TipoIndicador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(() => Indicador, (indicador) => indicador.tipoIndicador)
    indicadores: Indicador[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}