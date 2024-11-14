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
exports.TipoIndicadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipo_indicador_entity_1 = require("./entities/tipo_indicador.entity");
let TipoIndicadorService = class TipoIndicadorService {
    constructor(tipoIndicadorRepository) {
        this.tipoIndicadorRepository = tipoIndicadorRepository;
    }
    create(createTipoIndicadorDto) {
        const tipoIndicador = this.tipoIndicadorRepository.create(createTipoIndicadorDto);
        return this.tipoIndicadorRepository.save(tipoIndicador);
    }
    async findAll(page = 1, limit = 10) {
        const [data, total] = await this.tipoIndicadorRepository.findAndCount({
            take: limit,
            skip: (page - 1) * limit,
        });
        return { data, total };
    }
    async findOne(id) {
        const tipoIndicador = await this.tipoIndicadorRepository.findOne({
            where: { id },
        });
        if (!tipoIndicador) {
            throw new common_1.NotFoundException(`Tipo de indicador con ID ${id} no encontrado`);
        }
        return tipoIndicador;
    }
    async update(id, updateTipoIndicadorDto) {
        await this.tipoIndicadorRepository.update(id, updateTipoIndicadorDto);
        return this.findOne(id);
    }
    async remove(id) {
        const indicador = await this.tipoIndicadorRepository.findOneBy({ id });
        if (!indicador) {
            throw new common_1.NotFoundException(`El Tipo de Indicador con ID ${id} no encontrado`);
        }
        const result = await this.tipoIndicadorRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`No se pudo eliminar el Tipo de Indicador con ID ${id}`);
        }
    }
};
exports.TipoIndicadorService = TipoIndicadorService;
exports.TipoIndicadorService = TipoIndicadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_indicador_entity_1.TipoIndicador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoIndicadorService);
//# sourceMappingURL=tipo_indicador.service.js.map