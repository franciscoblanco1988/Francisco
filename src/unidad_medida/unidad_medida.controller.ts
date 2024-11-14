import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  InternalServerErrorException,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { UnidadDeMedidaService } from './unidad_medida.service';

import { CreateUnidadDeMedidaDto } from './dto/create-unidad_medida.dto';
import { UpdateUnidadDeMedidaDto } from './dto/update-unidad_medida.dto';

@ApiTags('unidades-de-medida')
@Controller('unidades-de-medida')
export class UnidadDeMedidaController {
  constructor(private readonly unidadDeMedidaService: UnidadDeMedidaService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Unidad de medida creada exitosamente.' })
  create(@Body() createUnidadDeMedidaDto: CreateUnidadDeMedidaDto) {
    return this.unidadDeMedidaService.create(createUnidadDeMedidaDto);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Unidad de medida encontrada.' })
  findOne(@Param('id') id: string) {
    return this.unidadDeMedidaService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Unidad de medida actualizada.' })
  update(@Param('id') id: string, @Body() updateUnidadDeMedidaDto: UpdateUnidadDeMedidaDto) {
    return this.unidadDeMedidaService.update(+id, updateUnidadDeMedidaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Unidad de medida eliminada.' })
  remove(@Param('id') id: string) {
    return this.unidadDeMedidaService.remove(+id);
  }
}