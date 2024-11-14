import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { IndicadorService } from './indicador.service';

import { CreateIndicadorDto } from './dto/create-indicador.dto';
import { FilterIndicadorDto } from './dto/filter-indicador.dto';
import { UpdateIndicadorDto } from './dto/update-indicador.dto';

@ApiTags('indicadores')
@Controller('indicadores')
export class IndicadorController {
    constructor(private readonly indicadorService: IndicadorService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'Indicador creado.' })
    create(@Body() createIndicadorDto: CreateIndicadorDto) {
        return this.indicadorService.create(createIndicadorDto);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Lista de indicadores.' })
    findAll(@Query('page') page: number, @Query('limit') limit: number, @Query() filters: FilterIndicadorDto) {
        return this.indicadorService.findAll(page, limit, filters);
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Indicador encontrado.' })
    findOne(@Param('id') id: number) {
        return this.indicadorService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'Indicador actualizado.' })
    update(@Param('id') id: number, @Body() updateIndicadorDto: UpdateIndicadorDto) {
        return this.indicadorService.update(id, updateIndicadorDto);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Indicador eliminado.' })
    remove(@Param('id') id: number) {
        return this.indicadorService.remove(id);
    }
}