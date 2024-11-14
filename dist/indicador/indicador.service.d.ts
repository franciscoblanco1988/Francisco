import { Repository } from 'typeorm';
import { Poblacion } from 'src/poblacion/entities/poblacion.entity';
import { CreateIndicadorDto } from './dto/create-indicador.dto';
import { FilterIndicadorDto } from './dto/filter-indicador.dto';
import { UpdateIndicadorDto } from './dto/update-indicador.dto';
import { Indicador } from './entities/indicador.entity';
export declare class IndicadorService {
    private readonly indicadorRepository;
    private readonly poblacionRepository;
    constructor(indicadorRepository: Repository<Indicador>, poblacionRepository: Repository<Poblacion>);
    create(createIndicadorDto: CreateIndicadorDto): Promise<Indicador>;
    findAll(page?: number, limit?: number, filters?: FilterIndicadorDto): Promise<{
        data: Indicador[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<Indicador>;
    update(id: number, updateIndicadorDto: UpdateIndicadorDto): Promise<Indicador>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findByServicio(servicioId: number): Promise<Indicador[]>;
}
