import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';

import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './entities/servicio.entity';

@Injectable()
export class ServicioService {
    constructor(
        @InjectRepository(Servicio)
        private readonly servicioRepository: Repository<Servicio>,
        @InjectRepository(Servicio)
        private readonly indicadorRepository: Repository<Indicador>,
    ) { }

    async create(createServicioDto: CreateServicioDto) {
        const servicio = this.servicioRepository.create(createServicioDto);
        return this.servicioRepository.save(servicio);
    }

    async findAll(page: number, limit: number) {
        const [result, total] = await this.servicioRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
        return { total, services: result };
    }

    async findOne(id: number) {
        return this.servicioRepository.findOneBy({ id });
    }

    async update(id: number, updateServicioDto: UpdateServicioDto) {
        await this.servicioRepository.update(id, updateServicioDto);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.servicioRepository.delete(id);
    }

    // Implementar la camtidad de Servicio por Indicadores
    async countServicesByIndicatorGroup() {
        const result = await this.indicadorRepository
            .createQueryBuilder('indicador')
            .select('servicio.descripcion AS servicioDescripcion')
            .addSelect('COUNT(indicador.id) AS cantidad')
            .leftJoin('indicador.servicio', 'servicio')
            .groupBy('servicio.descripcion')
            .getRawMany();

        return result;
    }
}