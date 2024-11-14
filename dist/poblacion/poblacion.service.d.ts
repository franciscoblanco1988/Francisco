import { Repository } from 'typeorm';
import { Indicador } from 'src/indicador/entities/indicador.entity';
import { Zona } from 'src/zona/entities/zona.entity';
import { CreatePoblacionDto } from './dto/create-poblacion.dto';
import { Poblacion } from './entities/poblacion.entity';
export declare class PoblacionService {
    private poblacionRepository;
    private zonaRepository;
    private indicadorRepository;
    constructor(poblacionRepository: Repository<Poblacion>, zonaRepository: Repository<Zona>, indicadorRepository: Repository<Indicador>);
    create(createPoblacionDto: CreatePoblacionDto): Promise<Poblacion>;
    findAll(page: number, limit: number): Promise<Poblacion[]>;
    findById(id: number): Promise<Poblacion>;
    update(id: number, updatePoblacionDto: CreatePoblacionDto): Promise<Poblacion>;
    remove(id: number): Promise<void>;
    search(query: string): Promise<Poblacion[]>;
    findIndicatorsByPoblacionId(id: number): Promise<Indicador[]>;
}
