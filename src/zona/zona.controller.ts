import { Controller, Post, Body, Get, Param, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { ZonaService } from './zona.service';

import { CreateZonaDto } from './dto/create-zona.dto';
import { FilterZonaDto } from './dto/filter-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';
import { Zona } from './entities/zona.entity';

@ApiTags('zona')
@Controller('zona')
export class ZonaController {
  constructor(private readonly zonaService: ZonaService) { }

  @ApiResponse({ status: 201, description: 'Zona creada.' })
  @Post()
  async create(@Body() createZonaDto: CreateZonaDto): Promise<Zona> {
    return this.zonaService.create(createZonaDto);
  }

  @ApiResponse({ status: 200, description: 'Lista de zonas.' })
  @Get()
  async findAll(@Query() filterDto: FilterZonaDto, @Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Zona[]> {
    return this.zonaService.findAll(filterDto, page, limit);
  }

  @ApiResponse({ status: 200, description: 'Zona encontrada.' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Zona> {
    return this.zonaService.findOne(id);
  }

  @ApiResponse({ status: 200, description: 'Zona actualizada.' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateZonaDto: UpdateZonaDto): Promise<Zona> {
    return this.zonaService.update(id, updateZonaDto);
  }

  @ApiResponse({ status: 204, description: 'Zona eliminada.' })
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.zonaService.remove(id);
  }
}