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
exports.PoblacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const indicador_entity_1 = require("../indicador/entities/indicador.entity");
const zona_entity_1 = require("../zona/entities/zona.entity");
const poblacion_entity_1 = require("./entities/poblacion.entity");
let PoblacionService = class PoblacionService {
    constructor(poblacionRepository, zonaRepository, indicadorRepository) {
        this.poblacionRepository = poblacionRepository;
        this.zonaRepository = zonaRepository;
        this.indicadorRepository = indicadorRepository;
    }
    async create(createPoblacionDto) {
        const poblacion = new poblacion_entity_1.Poblacion();
        poblacion.nombre = createPoblacionDto.nombre;
        poblacion.codigoINE = createPoblacionDto.codigoINE;
        if (createPoblacionDto.zonaId) {
            const zona = await this.zonaRepository.findOneBy({ id: createPoblacionDto.zonaId });
            if (!zona) {
                throw new common_1.NotFoundException(`Zona con ID ${createPoblacionDto.zonaId} no encontrada`);
            }
            poblacion.zona = zona;
        }
        if (createPoblacionDto.indicadoresIds) {
            const indicadores = await this.indicadorRepository.findByIds(createPoblacionDto.indicadoresIds);
            poblacion.indicadores = indicadores;
        }
        return this.poblacionRepository.save(poblacion);
    }
    async findAll(page, limit) {
        return this.poblacionRepository.find({
            relations: ['zona', 'indicadores'],
            skip: (page - 1) * limit,
            take: limit,
        });
    }
    async findById(id) {
        return this.poblacionRepository.findOne({
            where: { id },
            relations: ['zona', 'indicadores'],
        });
    }
    async update(id, updatePoblacionDto) {
        await this.poblacionRepository.update(id, updatePoblacionDto);
        return this.findById(id);
    }
    async remove(id) {
        await this.poblacionRepository.delete(id);
    }
    async search(query) {
        return this.poblacionRepository.createQueryBuilder('poblacion')
            .where('poblacion.nombre LIKE :query', { query: `%${query}%` })
            .getMany();
    }
    async findIndicatorsByPoblacionId(id) {
        const poblacion = await this.poblacionRepository.findOne({
            where: { id },
            relations: ['indicadores'],
        });
        if (!poblacion) {
            throw new common_1.NotFoundException(`Población con ID ${id} no encontrada`);
        }
        return poblacion.indicadores;
    }
};
exports.PoblacionService = PoblacionService;
exports.PoblacionService = PoblacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(poblacion_entity_1.Poblacion)),
    __param(1, (0, typeorm_1.InjectRepository)(zona_entity_1.Zona)),
    __param(2, (0, typeorm_1.InjectRepository)(indicador_entity_1.Indicador)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PoblacionService);
//# sourceMappingURL=poblacion.service.js.map