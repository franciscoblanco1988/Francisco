import { ZonaService } from './zona.service';
import { CreateZonaDto } from './dto/create-zona.dto';
import { FilterZonaDto } from './dto/filter-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';
import { Zona } from './entities/zona.entity';
export declare class ZonaController {
    private readonly zonaService;
    constructor(zonaService: ZonaService);
    create(createZonaDto: CreateZonaDto): Promise<Zona>;
    findAll(filterDto: FilterZonaDto, page?: number, limit?: number): Promise<Zona[]>;
    findOne(id: number): Promise<Zona>;
    update(id: number, updateZonaDto: UpdateZonaDto): Promise<Zona>;
    remove(id: number): Promise<void>;
}