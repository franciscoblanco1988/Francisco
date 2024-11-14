import { IndicadorService } from './indicador.service';
import { CreateIndicadorDto } from './dto/create-indicador.dto';
import { FilterIndicadorDto } from './dto/filter-indicador.dto';
import { UpdateIndicadorDto } from './dto/update-indicador.dto';
export declare class IndicadorController {
    private readonly indicadorService;
    constructor(indicadorService: IndicadorService);
    create(createIndicadorDto: CreateIndicadorDto): Promise<import("./entities/indicador.entity").Indicador>;
    findAll(page: number, limit: number, filters: FilterIndicadorDto): Promise<{
        data: import("./entities/indicador.entity").Indicador[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<import("./entities/indicador.entity").Indicador>;
    update(id: number, updateIndicadorDto: UpdateIndicadorDto): Promise<import("./entities/indicador.entity").Indicador>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
