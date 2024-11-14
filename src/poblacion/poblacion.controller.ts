// poblacion.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

import { Indicador } from 'src/indicador/entities/indicador.entity';

import { PoblacionService } from './poblacion.service';

import { CreatePoblacionDto } from './dto/create-poblacion.dto';
import { Poblacion } from './entities/poblacion.entity';

@ApiTags('poblaciones')
@Controller('poblaciones')
export class PoblacionController {
  constructor(private readonly poblacionService: PoblacionService) { }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva población' })
  @ApiResponse({ status: 201, description: 'Población creada.', type: Poblacion })
  @ApiResponse({ status: 400, description: 'Error en la creación de la población.' })
  create(@Body() createPoblacionDto: CreatePoblacionDto): Promise<Poblacion> {
    return this.poblacionService.create(createPoblacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las poblaciones' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Número de página' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Número de elementos por página' })
  @ApiResponse({ status: 200, description: 'Lista de poblaciones.', type: [Poblacion] })
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Poblacion[]> {
    return this.poblacionService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una población por ID' })
  @ApiResponse({ status: 200, description: 'Población encontrada.', type: Poblacion })
  @ApiResponse({ status: 404, description: 'Población no encontrada.' })
  findOne(@Param('id') id: number): Promise<Poblacion> {
    return this.poblacionService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una población por ID' })
  @ApiResponse({ status: 200, description: 'Población actualizada.', type: Poblacion })
  @ApiResponse({ status: 404, description: 'Población no encontrada.' })
  update(@Param('id') id: number, @Body() updatePoblacionDto: CreatePoblacionDto): Promise<Poblacion> {
    return this.poblacionService.update(id, updatePoblacionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una población por ID' })
  @ApiResponse({ status: 204, description: 'Población eliminada.' })
  @ApiResponse({ status: 404, description: 'Población no encontrada.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.poblacionService.remove(id);
  }

  @Get(':id/indicadores')
  @ApiOperation({ summary: 'Obtener indicadores por población ID' })
  @ApiResponse({ status: 200, description: 'Lista de indicadores.', type: [Indicador] })
  @ApiResponse({ status: 404, description: 'Población no encontrada.' })
  findIndicatorsByPoblacionId(@Param('id') id: number): Promise<Indicador[]> {
    return this.poblacionService.findIndicatorsByPoblacionId(id);
  }
}