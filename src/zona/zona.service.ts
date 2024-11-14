import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateZonaDto } from './dto/create-zona.dto';
import { FilterZonaDto } from './dto/filter-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';
import { Zona } from './entities/zona.entity';

@Injectable()
export class ZonaService {
  constructor(
    @InjectRepository(Zona)
    private readonly zonaRepository: Repository<Zona>,
  ) { }

  async create(createZonaDto: CreateZonaDto): Promise<Zona> {
    const zona = this.zonaRepository.create(createZonaDto);
    return this.zonaRepository.save(zona);
  }

  async findAll(filterDto: FilterZonaDto, page: number = 1, limit: number = 10): Promise<Zona[]> {
    const query = this.zonaRepository.createQueryBuilder('zona');

    // Filtros
    if (filterDto.descripcion) {
      query.andWhere('zona.descripcion ILIKE :descripcion', { descripcion: `%${filterDto.descripcion}%` });
    }

    // Paginación
    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }

  async findOne(id: number): Promise<Zona> {
    try {
      return await this.zonaRepository.findOne({
        where: { id }, // Usamos un objeto con la condición de búsqueda
      });
    } catch (error) {
      throw new NotFoundException(`Zona con ID ${id} no encontrada`);
    }
  }

  async update(id: number, updateZonaDto: UpdateZonaDto): Promise<Zona> {
    await this.findOne(id);
    await this.zonaRepository.update(id, updateZonaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const zona = await this.findOne(id);
    await this.zonaRepository.remove(zona);
  }
}