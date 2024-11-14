import { Injectable } from '@nestjs/common';
import { CreateRespaldoIndicadoreDto } from './dto/create-respaldo-indicadore.dto';
import { UpdateRespaldoIndicadoreDto } from './dto/update-respaldo-indicadore.dto';

@Injectable()
export class RespaldoIndicadoresService {
  create(createRespaldoIndicadoreDto: CreateRespaldoIndicadoreDto) {
    return 'This action adds a new respaldoIndicadore';
  }

  findAll() {
    return `This action returns all respaldoIndicadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} respaldoIndicadore`;
  }

  update(id: number, updateRespaldoIndicadoreDto: UpdateRespaldoIndicadoreDto) {
    return `This action updates a #${id} respaldoIndicadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} respaldoIndicadore`;
  }
}
