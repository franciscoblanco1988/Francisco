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
exports.IndicadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const poblacion_entity_1 = require("../poblacion/entities/poblacion.entity");
const indicador_entity_1 = require("./entities/indicador.entity");
let IndicadorService = class IndicadorService {
    constructor(indicadorRepository, poblacionRepository) {
        this.indicadorRepository = indicadorRepository;
        this.poblacionRepository = poblacionRepository;
    }
    async create(createIndicadorDto) {
        const indicador = this.indicadorRepository.create(createIndicadorDto);
        if (createIndicadorDto.poblacionesIds) {
            const poblaciones = await this.poblacionRepository.findByIds(createIndicadorDto.poblacionesIds);
            indicador.poblaciones = poblaciones;
        }
        return this.indicadorRepository.save(indicador);
    }
    async findAll(page = 1, limit = 10, filters) {
        const query = this.indicadorRepository.createQueryBuilder('indicador')
            .leftJoinAndSelect('indicador.tipoIndicador', 'tipoIndicador')
            .leftJoinAndSelect('indicador.servicio', 'servicio')
            .leftJoinAndSelect('indicador.unidadMedida', 'unidadMedida')
            .leftJoinAndSelect('indicador.periodicidad', 'periodicidad')
            .leftJoinAndSelect('indicador.poblaciones', 'poblacion');
        if (filters?.nombre) {
            query.andWhere('indicador.nombre LIKE :nombre', { nombre: `%${filters.nombre}%` });
        }
        if (filters?.codigo) {
            query.andWhere('indicador.codigo LIKE :codigo', { codigo: `%${filters.codigo}%` });
        }
        const [result, total] = await query
            .skip((page - 1) * limit)
            .take(limit)
            .getManyAndCount();
        return {
            data: result,
            total,
            page,
            limit,
        };
    }
    async findOne(id) {
        return this.indicadorRepository.findOne({
            where: { id },
            relations: ['tipoIndicador', 'servicio', 'unidadMedida', 'periodicidad', 'poblaciones'],
        });
    }
    async update(id, updateIndicadorDto) {
        await this.indicadorRepository.update(id, updateIndicadorDto);
        return this.findOne(id);
    }
    async remove(id) {
        return this.indicadorRepository.delete(id);
    }
    async findByServicio(servicioId) {
        return this.indicadorRepository.find({
            where: { servicio: { id: servicioId } },
            relations: ['tipoIndicador', 'unidadMedida'],
        });
    }
};
exports.IndicadorService = IndicadorService;
exports.IndicadorService = IndicadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(indicador_entity_1.Indicador)),
    __param(1, (0, typeorm_1.InjectRepository)(poblacion_entity_1.Poblacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], IndicadorService);
//# sourceMappingURL=indicador.service.js.map