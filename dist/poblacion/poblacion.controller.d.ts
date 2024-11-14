import { Indicador } from 'src/indicador/entities/indicador.entity';
import { PoblacionService } from './poblacion.service';
import { CreatePoblacionDto } from './dto/create-poblacion.dto';
import { Poblacion } from './entities/poblacion.entity';
export declare class PoblacionController {
    private readonly poblacionService;
    constructor(poblacionService: PoblacionService);
    create(createPoblacionDto: CreatePoblacionDto): Promise<Poblacion>;
    findAll(page?: number, limit?: number): Promise<Poblacion[]>;
    findOne(id: number): Promise<Poblacion>;
    update(id: number, updatePoblacionDto: CreatePoblacionDto): Promise<Poblacion>;
    remove(id: number): Promise<void>;
    findIndicatorsByPoblacionId(id: number): Promise<Indicador[]>;
}
