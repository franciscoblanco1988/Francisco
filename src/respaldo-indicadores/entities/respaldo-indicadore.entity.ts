import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RespaldoIndicador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    fecha: Date;

    @Column()
    accion: string; // "CREATED" o "DELETED"
}
