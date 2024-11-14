import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RespaldoIndicadoresService } from './respaldo-indicadores.service';
import { CreateRespaldoIndicadoreDto } from './dto/create-respaldo-indicadore.dto';
import { UpdateRespaldoIndicadoreDto } from './dto/update-respaldo-indicadore.dto';

@Controller('respaldo-indicadores')
export class RespaldoIndicadoresController {
  constructor(private readonly respaldoIndicadoresService: RespaldoIndicadoresService) {}

  @Post()
  create(@Body() createRespaldoIndicadoreDto: CreateRespaldoIndicadoreDto) {
    return this.respaldoIndicadoresService.create(createRespaldoIndicadoreDto);
  }

  @Get()
  findAll() {
    return this.respaldoIndicadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respaldoIndicadoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRespaldoIndicadoreDto: UpdateRespaldoIndicadoreDto) {
    return this.respaldoIndicadoresService.update(+id, updateRespaldoIndicadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.respaldoIndicadoresService.remove(+id);
  }
}
