import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { ServicioService } from './servicio.service';

import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@ApiTags('servicio')
@Controller('servicios')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Servicio creado.' })
  create(@Body() createServicioDto: CreateServicioDto) {
    return this.servicioService.create(createServicioDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de Servicios.' })
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.servicioService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicioDto: UpdateServicioDto) {
    return this.servicioService.update(+id, updateServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicioService.remove(+id);
  }
}