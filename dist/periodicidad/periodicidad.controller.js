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
exports.PeriodicidadController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const periodicidad_service_1 = require("./periodicidad.service");
const create_periodicidad_dto_1 = require("./dto/create-periodicidad.dto");
let PeriodicidadController = class PeriodicidadController {
    constructor(periodicidadService) {
        this.periodicidadService = periodicidadService;
    }
    findAll() {
        return this.periodicidadService.findAll();
    }
    findOne(id) {
        return this.periodicidadService.findOne(id);
    }
    create(createPeriodicidadDto) {
        return this.periodicidadService.create(createPeriodicidadDto);
    }
    update(id, updateDto) {
        return this.periodicidadService.update(id, updateDto);
    }
    delete(id) {
        return this.periodicidadService.delete(id);
    }
};
exports.PeriodicidadController = PeriodicidadController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las periodicidades' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de periodicidades.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeriodicidadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una periodicidad por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La periodicidad encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PeriodicidadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva periodicidad' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'La periodicidad ha sido creada.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_periodicidad_dto_1.CreatePeriodicidadDto]),
    __metadata("design:returntype", Promise)
], PeriodicidadController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una periodicidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La periodicidad ha sido actualizada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_periodicidad_dto_1.CreatePeriodicidadDto]),
    __metadata("design:returntype", Promise)
], PeriodicidadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una periodicidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La periodicidad ha sido eliminada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PeriodicidadController.prototype, "delete", null);
exports.PeriodicidadController = PeriodicidadController = __decorate([
    (0, swagger_1.ApiTags)('periodicidades'),
    (0, common_1.Controller)('periodicidades'),
    __metadata("design:paramtypes", [periodicidad_service_1.PeriodicidadService])
], PeriodicidadController);
//# sourceMappingURL=periodicidad.controller.js.map