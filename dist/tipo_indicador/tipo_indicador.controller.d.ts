import { TipoIndicadorService } from './tipo_indicador.service';
import { CreateTipoIndicadorDto } from './dto/create-tipo_indicador.dto';
import { UpdateTipoIndicadorDto } from './dto/update-tipo_indicador.dto';
export declare class TipoIndicadorController {
    private readonly tipoIndicadorService;
    constructor(tipoIndicadorService: TipoIndicadorService);
    create(createTipoIndicadorDto: CreateTipoIndicadorDto): Promise<import("./entities/tipo_indicador.entity").TipoIndicador>;
    findAll(page?: string, limit?: string): Promise<{
        data: import("./entities/tipo_indicador.entity").TipoIndicador[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/tipo_indicador.entity").TipoIndicador>;
    update(id: string, updateTipoIndicadorDto: UpdateTipoIndicadorDto): Promise<import("./entities/tipo_indicador.entity").TipoIndicador>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
