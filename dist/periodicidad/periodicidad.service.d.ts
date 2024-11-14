import { Repository } from 'typeorm';
import { CreatePeriodicidadDto } from './dto/create-periodicidad.dto';
import { Periodicidad } from './entities/periodicidad.entity';
export declare class PeriodicidadService {
    private periodicidadRepository;
    constructor(periodicidadRepository: Repository<Periodicidad>);
    findAll(): Promise<Periodicidad[]>;
    private handleNotFound;
    create(createPeriodicidadDto: CreatePeriodicidadDto): Promise<Periodicidad>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<Periodicidad>;
    update(id: number, updateDto: CreatePeriodicidadDto): Promise<Periodicidad>;
}
