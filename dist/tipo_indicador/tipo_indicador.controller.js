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
exports.TipoIndicadorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tipo_indicador_service_1 = require("./tipo_indicador.service");
const create_tipo_indicador_dto_1 = require("./dto/create-tipo_indicador.dto");
const update_tipo_indicador_dto_1 = require("./dto/update-tipo_indicador.dto");
let TipoIndicadorController = class TipoIndicadorController {
    constructor(tipoIndicadorService) {
        this.tipoIndicadorService = tipoIndicadorService;
    }
    create(createTipoIndicadorDto) {
        return this.tipoIndicadorService.create(createTipoIndicadorDto);
    }
    findAll(page = '1', limit = '10') {
        return this.tipoIndicadorService.findAll(Number(page), Number(limit));
    }
    findOne(id) {
        return this.tipoIndicadorService.findOne(+id);
    }
    update(id, updateTipoIndicadorDto) {
        return this.tipoIndicadorService.update(+id, updateTipoIndicadorDto);
    }
    async remove(id) {
        await this.tipoIndicadorService.remove(+id);
        return { message: `Indicador con ID ${id} eliminado correctamente.` };
    }
};
exports.TipoIndicadorController = TipoIndicadorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de indicador creado.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_indicador_dto_1.CreateTipoIndicadorDto]),
    __metadata("design:returntype", void 0)
], TipoIndicadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Número de página' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Número de registros por página' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de tipos de indicadores con paginación.' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TipoIndicadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de indicador encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoIndicadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de indicador actualizado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipo_indicador_dto_1.UpdateTipoIndicadorDto]),
    __metadata("design:returntype", void 0)
], TipoIndicadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Indicador eliminado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Indicador no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipoIndicadorController.prototype, "remove", null);
exports.TipoIndicadorController = TipoIndicadorController = __decorate([
    (0, swagger_1.ApiTags)('tipo de indicador'),
    (0, common_1.Controller)('tipo_indicador'),
    __metadata("design:paramtypes", [tipo_indicador_service_1.TipoIndicadorService])
], TipoIndicadorController);
//# sourceMappingURL=tipo_indicador.controller.js.map