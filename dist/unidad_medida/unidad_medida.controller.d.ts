import { UnidadDeMedidaService } from './unidad_medida.service';
import { CreateUnidadDeMedidaDto } from './dto/create-unidad_medida.dto';
import { UpdateUnidadDeMedidaDto } from './dto/update-unidad_medida.dto';
export declare class UnidadDeMedidaController {
    private readonly unidadDeMedidaService;
    constructor(unidadDeMedidaService: UnidadDeMedidaService);
    create(createUnidadDeMedidaDto: CreateUnidadDeMedidaDto): Promise<import("./entities/unidad_medida.entity").UnidadDeMedida>;
    findOne(id: string): Promise<import("./entities/unidad_medida.entity").UnidadDeMedida>;
    update(id: string, updateUnidadDeMedidaDto: UpdateUnidadDeMedidaDto): Promise<import("./entities/unidad_medida.entity").UnidadDeMedida>;
    remove(id: string): Promise<void>;
}
