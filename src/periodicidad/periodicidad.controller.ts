import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { PeriodicidadService } from './periodicidad.service';

import { CreatePeriodicidadDto } from './dto/create-periodicidad.dto';
import { Periodicidad } from './entities/periodicidad.entity';

@ApiTags('periodicidades')
@Controller('periodicidades')
export class PeriodicidadController {
  constructor(private readonly periodicidadService: PeriodicidadService) { }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las periodicidades' })
  @ApiResponse({ status: 200, description: 'Lista de periodicidades.' })
  findAll(): Promise<Periodicidad[]> {
    return this.periodicidadService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una periodicidad por ID' })
  @ApiResponse({ status: 200, description: 'La periodicidad encontrada.' })
  findOne(@Param('id') id: number): Promise<Periodicidad> {
    return this.periodicidadService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva periodicidad' })
  @ApiResponse({ status: 201, description: 'La periodicidad ha sido creada.' })
  create(@Body() createPeriodicidadDto: CreatePeriodicidadDto): Promise<Periodicidad> {
    return this.periodicidadService.create(createPeriodicidadDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una periodicidad' })
  @ApiResponse({ status: 200, description: 'La periodicidad ha sido actualizada.' })
  update(@Param('id') id: number, @Body() updateDto: CreatePeriodicidadDto): Promise<Periodicidad> {
    return this.periodicidadService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una periodicidad' })
  @ApiResponse({ status: 200, description: 'La periodicidad ha sido eliminada.' })
  delete(@Param('id') id: number): Promise<void> {
    return this.periodicidadService.delete(id);
  }
}