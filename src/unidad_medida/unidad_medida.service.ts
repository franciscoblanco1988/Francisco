import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateUnidadDeMedidaDto } from './dto/create-unidad_medida.dto';
import { FilterUnidadDeMedidaDto } from './dto/filter-unidad-de-medida.dto';
import { UpdateUnidadDeMedidaDto } from './dto/update-unidad_medida.dto';
import { UnidadDeMedida } from './entities/unidad_medida.entity';

@Injectable()
export class UnidadDeMedidaService {
  constructor(
    @InjectRepository(UnidadDeMedida)
    private readonly unidadDeMedidaRepository: Repository<UnidadDeMedida>,
  ) { }

  async create(createUnidadDeMedidaDto: CreateUnidadDeMedidaDto): Promise<UnidadDeMedida> {
    const unidadDeMedida = this.unidadDeMedidaRepository.create(createUnidadDeMedidaDto);
    return this.unidadDeMedidaRepository.save(unidadDeMedida);
  }

  async findAll(filterDto: FilterUnidadDeMedidaDto, page: number = 1, limit: number = 10): Promise<UnidadDeMedida[]> {
    const query = this.unidadDeMedidaRepository.createQueryBuilder('unidadDeMedida');

    // Filtros
    if (filterDto.descripcion) {
      query.andWhere('unidadDeMedida.descripcion ILIKE :descripcion', { descripcion: `%${filterDto.descripcion}%` });
    }

    // Paginación
    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }

  async findOne(id: number): Promise<UnidadDeMedida> {
    try {
      return await this.unidadDeMedidaRepository.findOne({
        where: { id }, // Usamos un objeto con la condición de búsqueda
      });

    } catch (error) {
      throw new NotFoundException(`Unidad de medida con ID ${id} no encontrada`);
    }
  }

  async update(id: number, updateUnidadDeMedidaDto: UpdateUnidadDeMedidaDto): Promise<UnidadDeMedida> {
    await this.findOne(id);
    await this.unidadDeMedidaRepository.update(id, updateUnidadDeMedidaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const unidadDeMedida = await this.findOne(id);
    await this.unidadDeMedidaRepository.remove(unidadDeMedida);
  }
}