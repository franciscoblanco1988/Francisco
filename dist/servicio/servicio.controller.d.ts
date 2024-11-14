import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
export declare class ServicioController {
    private readonly servicioService;
    constructor(servicioService: ServicioService);
    create(createServicioDto: CreateServicioDto): Promise<import("./entities/servicio.entity").Servicio>;
    findAll(page: number, limit: number): Promise<{
        total: number;
        services: import("./entities/servicio.entity").Servicio[];
    }>;
    findOne(id: string): Promise<import("./entities/servicio.entity").Servicio>;
    update(id: string, updateServicioDto: UpdateServicioDto): Promise<import("./entities/servicio.entity").Servicio>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
