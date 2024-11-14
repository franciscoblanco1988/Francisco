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
exports.PoblacionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const indicador_entity_1 = require("../indicador/entities/indicador.entity");
const poblacion_service_1 = require("./poblacion.service");
const create_poblacion_dto_1 = require("./dto/create-poblacion.dto");
const poblacion_entity_1 = require("./entities/poblacion.entity");
let PoblacionController = class PoblacionController {
    constructor(poblacionService) {
        this.poblacionService = poblacionService;
    }
    create(createPoblacionDto) {
        return this.poblacionService.create(createPoblacionDto);
    }
    findAll(page = 1, limit = 10) {
        return this.poblacionService.findAll(page, limit);
    }
    findOne(id) {
        return this.poblacionService.findById(id);
    }
    update(id, updatePoblacionDto) {
        return this.poblacionService.update(id, updatePoblacionDto);
    }
    remove(id) {
        return this.poblacionService.remove(id);
    }
    findIndicatorsByPoblacionId(id) {
        return this.poblacionService.findIndicatorsByPoblacionId(id);
    }
};
exports.PoblacionController = PoblacionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva población' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Población creada.', type: poblacion_entity_1.Poblacion }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error en la creación de la población.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poblacion_dto_1.CreatePoblacionDto]),
    __metadata("design:returntype", Promise)
], PoblacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las poblaciones' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Número de página' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Número de elementos por página' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de poblaciones.', type: [poblacion_entity_1.Poblacion] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PoblacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una población por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Población encontrada.', type: poblacion_entity_1.Poblacion }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Población no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PoblacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una población por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Población actualizada.', type: poblacion_entity_1.Poblacion }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Población no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_poblacion_dto_1.CreatePoblacionDto]),
    __metadata("design:returntype", Promise)
], PoblacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una población por ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Población eliminada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Población no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PoblacionController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/indicadores'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener indicadores por población ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de indicadores.', type: [indicador_entity_1.Indicador] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Población no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PoblacionController.prototype, "findIndicatorsByPoblacionId", null);
exports.PoblacionController = PoblacionController = __decorate([
    (0, swagger_1.ApiTags)('poblaciones'),
    (0, common_1.Controller)('poblaciones'),
    __metadata("design:paramtypes", [poblacion_service_1.PoblacionService])
], PoblacionController);
//# sourceMappingURL=poblacion.controller.js.map