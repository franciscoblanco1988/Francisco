import { RespaldoIndicadoresService } from './respaldo-indicadores.service';
import { CreateRespaldoIndicadoreDto } from './dto/create-respaldo-indicadore.dto';
import { UpdateRespaldoIndicadoreDto } from './dto/update-respaldo-indicadore.dto';
export declare class RespaldoIndicadoresController {
    private readonly respaldoIndicadoresService;
    constructor(respaldoIndicadoresService: RespaldoIndicadoresService);
    create(createRespaldoIndicadoreDto: CreateRespaldoIndicadoreDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRespaldoIndicadoreDto: UpdateRespaldoIndicadoreDto): string;
    remove(id: string): string;
}
