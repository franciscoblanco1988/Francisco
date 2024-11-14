// src/tipo-indicador/tipo-indicador.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';

import { TipoIndicadorService } from './tipo_indicador.service';

import { CreateTipoIndicadorDto } from './dto/create-tipo_indicador.dto';
import { UpdateTipoIndicadorDto } from './dto/update-tipo_indicador.dto';

@ApiTags('tipo de indicador')
@Controller('tipo_indicador')
export class TipoIndicadorController {
  constructor(private readonly tipoIndicadorService: TipoIndicadorService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Tipo de indicador creado.' })
  create(@Body() createTipoIndicadorDto: CreateTipoIndicadorDto) {
    return this.tipoIndicadorService.create(createTipoIndicadorDto);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Número de página' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Número de registros por página' })
  @ApiResponse({ status: 200, description: 'Lista de tipos de indicadores con paginación.' })
  findAll(@Query('page') page: string = '1', @Query('limit') limit: string = '10') {
    return this.tipoIndicadorService.findAll(Number(page), Number(limit));
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Tipo de indicador encontrado.' })
  findOne(@Param('id') id: string) {
    return this.tipoIndicadorService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Tipo de indicador actualizado.' })
  update(@Param('id') id: string, @Body() updateTipoIndicadorDto: UpdateTipoIndicadorDto) {
    return this.tipoIndicadorService.update(+id, updateTipoIndicadorDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Indicador eliminado.' })
  @ApiResponse({ status: 404, description: 'Indicador no encontrado.' })
  async remove(@Param('id') id: string) {
    await this.tipoIndicadorService.remove(+id);
    return { message: `Indicador con ID ${id} eliminado correctamente.` };
  }
}