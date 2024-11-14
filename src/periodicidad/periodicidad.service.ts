import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreatePeriodicidadDto } from './dto/create-periodicidad.dto';
import { Periodicidad } from './entities/periodicidad.entity';

@Injectable()
export class PeriodicidadService {
  constructor(
    @InjectRepository(Periodicidad)
    private periodicidadRepository: Repository<Periodicidad>,
  ) { }

  findAll(): Promise<Periodicidad[]> {
    return this.periodicidadRepository.find({ relations: ['indicadores'] });
  }

  private handleNotFound(periodicidad: Periodicidad | null, id: number): Periodicidad {
    if (!periodicidad) {
      throw new NotFoundException(`Periodicidad con ID ${id} no encontrada`);
    }
    return periodicidad;
  }

  create(createPeriodicidadDto: CreatePeriodicidadDto): Promise<Periodicidad> {
    const periodicidad = this.periodicidadRepository.create(createPeriodicidadDto);
    return this.periodicidadRepository.save(periodicidad);
  }
  async delete(id: number): Promise<void> {
    const result = await this.periodicidadRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Periodicidad con ID ${id} no encontrada`);
    }
  }

  async findOne(id: number): Promise<Periodicidad> {
    const periodicidad = await this.periodicidadRepository.findOne({
      where: { id }, // Usamos un objeto con la condición de búsqueda
    });
    if (!periodicidad) {
      throw new NotFoundException(`Periodicidad con ID ${id} no encontrada`);
    }
    return periodicidad;
  }

  async update(id: number, updateDto: CreatePeriodicidadDto): Promise<Periodicidad> {
    const periodicidad = await this.findOne(id);
    Object.assign(periodicidad, updateDto);
    return this.periodicidadRepository.save(periodicidad);
  }
}