import { Repository } from 'typeorm';
import { CreateUnidadDeMedidaDto } from './dto/create-unidad_medida.dto';
import { FilterUnidadDeMedidaDto } from './dto/filter-unidad-de-medida.dto';
import { UpdateUnidadDeMedidaDto } from './dto/update-unidad_medida.dto';
import { UnidadDeMedida } from './entities/unidad_medida.entity';
export declare class UnidadDeMedidaService {
    private readonly unidadDeMedidaRepository;
    constructor(unidadDeMedidaRepository: Repository<UnidadDeMedida>);
    create(createUnidadDeMedidaDto: CreateUnidadDeMedidaDto): Promise<UnidadDeMedida>;
    findAll(filterDto: FilterUnidadDeMedidaDto, page?: number, limit?: number): Promise<UnidadDeMedida[]>;
    findOne(id: number): Promise<UnidadDeMedida>;
    update(id: number, updateUnidadDeMedidaDto: UpdateUnidadDeMedidaDto): Promise<UnidadDeMedida>;
    remove(id: number): Promise<void>;
}
