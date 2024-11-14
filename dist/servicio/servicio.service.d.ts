import { Repository } from 'typeorm';
import { Indicador } from 'src/indicador/entities/indicador.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './entities/servicio.entity';
export declare class ServicioService {
    private readonly servicioRepository;
    private readonly indicadorRepository;
    constructor(servicioRepository: Repository<Servicio>, indicadorRepository: Repository<Indicador>);
    create(createServicioDto: CreateServicioDto): Promise<Servicio>;
    findAll(page: number, limit: number): Promise<{
        total: number;
        services: Servicio[];
    }>;
    findOne(id: number): Promise<Servicio>;
    update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicio>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    countServicesByIndicatorGroup(): Promise<any[]>;
}
