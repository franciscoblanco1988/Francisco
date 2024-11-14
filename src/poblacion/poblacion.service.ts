// poblacion.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';
import { Zona } from 'src/zona/entities/zona.entity';

import { CreatePoblacionDto } from './dto/create-poblacion.dto';
import { Poblacion } from './entities/poblacion.entity';

@Injectable()
export class PoblacionService {
  constructor(
    @InjectRepository(Poblacion)
    private poblacionRepository: Repository<Poblacion>,
    @InjectRepository(Zona)
    private zonaRepository: Repository<Zona>,
    @InjectRepository(Indicador)
    private indicadorRepository: Repository<Indicador>,
  ) { }

  async create(createPoblacionDto: CreatePoblacionDto): Promise<Poblacion> {
    const poblacion = new Poblacion();
    poblacion.nombre = createPoblacionDto.nombre;
    poblacion.codigoINE = createPoblacionDto.codigoINE;

    if (createPoblacionDto.zonaId) {
      const zona = await this.zonaRepository.findOneBy({ id: createPoblacionDto.zonaId });
      if (!zona) {
        throw new NotFoundException(`Zona con ID ${createPoblacionDto.zonaId} no encontrada`);
      }
      poblacion.zona = zona; // Asignar la zona
    }

    if (createPoblacionDto.indicadoresIds) {
      const indicadores = await this.indicadorRepository.findByIds(createPoblacionDto.indicadoresIds);
      poblacion.indicadores = indicadores; // Asignar los indicadores
    }
    return this.poblacionRepository.save(poblacion);
  }

  async findAll(page: number, limit: number): Promise<Poblacion[]> {
    return this.poblacionRepository.find({
      relations: ['zona', 'indicadores'],
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findById(id: number): Promise<Poblacion> {
    return this.poblacionRepository.findOne({
      where: { id },
      relations: ['zona', 'indicadores'],
    });
  }

  async update(id: number, updatePoblacionDto: CreatePoblacionDto): Promise<Poblacion> {
    await this.poblacionRepository.update(id, updatePoblacionDto);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.poblacionRepository.delete(id);
  }

  async search(query: string): Promise<Poblacion[]> {
    return this.poblacionRepository.createQueryBuilder('poblacion')
      .where('poblacion.nombre LIKE :query', { query: `%${query}%` })
      .getMany();
  }

  // Obtener todos los indicadores por poblacion
  async findIndicatorsByPoblacionId(id: number): Promise<Indicador[]> {
    const poblacion = await this.poblacionRepository.findOne({
      where: { id },
      relations: ['indicadores'], // Cargar la relación con indicadores
    });

    if (!poblacion) {
      throw new NotFoundException(`Población con ID ${id} no encontrada`);
    }

    return poblacion.indicadores; // Retornar los indicadores
  }

}