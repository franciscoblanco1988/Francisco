import { PeriodicidadService } from './periodicidad.service';
import { CreatePeriodicidadDto } from './dto/create-periodicidad.dto';
import { Periodicidad } from './entities/periodicidad.entity';
export declare class PeriodicidadController {
    private readonly periodicidadService;
    constructor(periodicidadService: PeriodicidadService);
    findAll(): Promise<Periodicidad[]>;
    findOne(id: number): Promise<Periodicidad>;
    create(createPeriodicidadDto: CreatePeriodicidadDto): Promise<Periodicidad>;
    update(id: number, updateDto: CreatePeriodicidadDto): Promise<Periodicidad>;
    delete(id: number): Promise<void>;
}
