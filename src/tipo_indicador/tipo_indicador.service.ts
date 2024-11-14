// src/tipo-indicador/tipo-indicador.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateTipoIndicadorDto } from './dto/create-tipo_indicador.dto';
import { UpdateTipoIndicadorDto } from './dto/update-tipo_indicador.dto';
import { TipoIndicador } from './entities/tipo_indicador.entity';

@Injectable()
export class TipoIndicadorService {
  constructor(
    @InjectRepository(TipoIndicador)
    private readonly tipoIndicadorRepository: Repository<TipoIndicador>,
  ) { }

  create(createTipoIndicadorDto: CreateTipoIndicadorDto): Promise<TipoIndicador> {
    const tipoIndicador = this.tipoIndicadorRepository.create(createTipoIndicadorDto);
    return this.tipoIndicadorRepository.save(tipoIndicador);
  }

  async findAll(page: number = 1, limit: number = 10): Promise<{ data: TipoIndicador[], total: number }> {
    const [data, total] = await this.tipoIndicadorRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { data, total };
  }

  async findOne(id: number): Promise<TipoIndicador> {
    const tipoIndicador = await this.tipoIndicadorRepository.findOne({
      where: { id }, // Usamos un objeto con la condición de búsqueda
    });

    if (!tipoIndicador) {
      throw new NotFoundException(`Tipo de indicador con ID ${id} no encontrado`);
    }

    return tipoIndicador;
  }

  async update(id: number, updateTipoIndicadorDto: UpdateTipoIndicadorDto): Promise<TipoIndicador> {
    await this.tipoIndicadorRepository.update(id, updateTipoIndicadorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    // Verificar si el indicador existe
    const indicador = await this.tipoIndicadorRepository.findOneBy({ id });
    if (!indicador) {
      throw new NotFoundException(`El Tipo de Indicador con ID ${id} no encontrado`);
    }

    // Intentar eliminar el indicador
    const result = await this.tipoIndicadorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`No se pudo eliminar el Tipo de Indicador con ID ${id}`);
    }
  }
}