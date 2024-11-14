import { Repository } from 'typeorm';
import { CreateTipoIndicadorDto } from './dto/create-tipo_indicador.dto';
import { UpdateTipoIndicadorDto } from './dto/update-tipo_indicador.dto';
import { TipoIndicador } from './entities/tipo_indicador.entity';
export declare class TipoIndicadorService {
    private readonly tipoIndicadorRepository;
    constructor(tipoIndicadorRepository: Repository<TipoIndicador>);
    create(createTipoIndicadorDto: CreateTipoIndicadorDto): Promise<TipoIndicador>;
    findAll(page?: number, limit?: number): Promise<{
        data: TipoIndicador[];
        total: number;
    }>;
    findOne(id: number): Promise<TipoIndicador>;
    update(id: number, updateTipoIndicadorDto: UpdateTipoIndicadorDto): Promise<TipoIndicador>;
    remove(id: number): Promise<void>;
}
