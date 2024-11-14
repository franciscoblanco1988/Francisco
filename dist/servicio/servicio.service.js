"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const servicio_entity_1 = require("./entities/servicio.entity");
let ServicioService = class ServicioService {
    constructor(servicioRepository, indicadorRepository) {
        this.servicioRepository = servicioRepository;
        this.indicadorRepository = indicadorRepository;
    }
    async create(createServicioDto) {
        const servicio = this.servicioRepository.create(createServicioDto);
        return this.servicioRepository.save(servicio);
    }
    async findAll(page, limit) {
        const [result, total] = await this.servicioRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
        return { total, services: result };
    }
    async findOne(id) {
        return this.servicioRepository.findOneBy({ id });
    }
    async update(id, updateServicioDto) {
        await this.servicioRepository.update(id, updateServicioDto);
        return this.findOne(id);
    }
    async remove(id) {
        return this.servicioRepository.delete(id);
    }
    async countServicesByIndicatorGroup() {
        const result = await this.indicadorRepository
            .createQueryBuilder('indicador')
            .select('servicio.descripcion AS servicioDescripcion')
            .addSelect('COUNT(indicador.id) AS cantidad')
            .leftJoin('indicador.servicio', 'servicio')
            .groupBy('servicio.descripcion')
            .getRawMany();
        return result;
    }
};
exports.ServicioService = ServicioService;
exports.ServicioService = ServicioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(servicio_entity_1.Servicio)),
    __param(1, (0, typeorm_1.InjectRepository)(servicio_entity_1.Servicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ServicioService);
//# sourceMappingURL=servicio.service.js.map