import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Poblacion } from 'src/poblacion/entities/poblacion.entity';

import { CreateIndicadorDto } from './dto/create-indicador.dto';
import { FilterIndicadorDto } from './dto/filter-indicador.dto';
import { UpdateIndicadorDto } from './dto/update-indicador.dto';
import { Indicador } from './entities/indicador.entity';

@Injectable()
export class IndicadorService {
  constructor(
    @InjectRepository(Indicador)
    private readonly indicadorRepository: Repository<Indicador>,
    @InjectRepository(Poblacion)
    private readonly poblacionRepository: Repository<Poblacion>,
  ) { }

  async create(createIndicadorDto: CreateIndicadorDto) {
    const indicador = this.indicadorRepository.create(createIndicadorDto);
    if (createIndicadorDto.poblacionesIds) {
      const poblaciones = await this.poblacionRepository.findByIds(createIndicadorDto.poblacionesIds);
      indicador.poblaciones = poblaciones;
    }
    return this.indicadorRepository.save(indicador);
  }

  async findAll(page: number = 1, limit: number = 10, filters?: FilterIndicadorDto) {
    const query = this.indicadorRepository.createQueryBuilder('indicador')
      .leftJoinAndSelect('indicador.tipoIndicador', 'tipoIndicador')
      .leftJoinAndSelect('indicador.servicio', 'servicio')
      .leftJoinAndSelect('indicador.unidadMedida', 'unidadMedida')
      .leftJoinAndSelect('indicador.periodicidad', 'periodicidad')
      .leftJoinAndSelect('indicador.poblaciones', 'poblacion');

    if (filters?.nombre) {
      query.andWhere('indicador.nombre LIKE :nombre', { nombre: `%${filters.nombre}%` });
    }
    if (filters?.codigo) {
      query.andWhere('indicador.codigo LIKE :codigo', { codigo: `%${filters.codigo}%` });
    }

    const [result, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return {
      data: result,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number) {
    return this.indicadorRepository.findOne({
      where: { id },
      relations: ['tipoIndicador', 'servicio', 'unidadMedida', 'periodicidad', 'poblaciones'],
    });
  }

  async update(id: number, updateIndicadorDto: UpdateIndicadorDto) {
    await this.indicadorRepository.update(id, updateIndicadorDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.indicadorRepository.delete(id);
  }

  async findByServicio(servicioId: number) {
    return this.indicadorRepository.find({
      where: { servicio: { id: servicioId } },
      relations: ['tipoIndicador', 'unidadMedida'],
    });
  }
}