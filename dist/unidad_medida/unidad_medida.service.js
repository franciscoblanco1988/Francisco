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
exports.UnidadDeMedidaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const unidad_medida_entity_1 = require("./entities/unidad_medida.entity");
let UnidadDeMedidaService = class UnidadDeMedidaService {
    constructor(unidadDeMedidaRepository) {
        this.unidadDeMedidaRepository = unidadDeMedidaRepository;
    }
    async create(createUnidadDeMedidaDto) {
        const unidadDeMedida = this.unidadDeMedidaRepository.create(createUnidadDeMedidaDto);
        return this.unidadDeMedidaRepository.save(unidadDeMedida);
    }
    async findAll(filterDto, page = 1, limit = 10) {
        const query = this.unidadDeMedidaRepository.createQueryBuilder('unidadDeMedida');
        if (filterDto.descripcion) {
            query.andWhere('unidadDeMedida.descripcion ILIKE :descripcion', { descripcion: `%${filterDto.descripcion}%` });
        }
        query.skip((page - 1) * limit).take(limit);
        return query.getMany();
    }
    async findOne(id) {
        try {
            return await this.unidadDeMedidaRepository.findOne({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Unidad de medida con ID ${id} no encontrada`);
        }
    }
    async update(id, updateUnidadDeMedidaDto) {
        await this.findOne(id);
        await this.unidadDeMedidaRepository.update(id, updateUnidadDeMedidaDto);
        return this.findOne(id);
    }
    async remove(id) {
        const unidadDeMedida = await this.findOne(id);
        await this.unidadDeMedidaRepository.remove(unidadDeMedida);
    }
};
exports.UnidadDeMedidaService = UnidadDeMedidaService;
exports.UnidadDeMedidaService = UnidadDeMedidaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unidad_medida_entity_1.UnidadDeMedida)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UnidadDeMedidaService);
//# sourceMappingURL=unidad_medida.service.js.map