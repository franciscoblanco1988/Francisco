import { CreateRespaldoIndicadoreDto } from './dto/create-respaldo-indicadore.dto';
import { UpdateRespaldoIndicadoreDto } from './dto/update-respaldo-indicadore.dto';
export declare class RespaldoIndicadoresService {
    create(createRespaldoIndicadoreDto: CreateRespaldoIndicadoreDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRespaldoIndicadoreDto: UpdateRespaldoIndicadoreDto): string;
    remove(id: number): string;
}
