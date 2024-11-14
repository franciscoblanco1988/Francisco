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
exports.IndicadorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const indicador_service_1 = require("./indicador.service");
const create_indicador_dto_1 = require("./dto/create-indicador.dto");
const filter_indicador_dto_1 = require("./dto/filter-indicador.dto");
const update_indicador_dto_1 = require("./dto/update-indicador.dto");
let IndicadorController = class IndicadorController {
    constructor(indicadorService) {
        this.indicadorService = indicadorService;
    }
    create(createIndicadorDto) {
        return this.indicadorService.create(createIndicadorDto);
    }
    findAll(page, limit, filters) {
        return this.indicadorService.findAll(page, limit, filters);
    }
    findOne(id) {
        return this.indicadorService.findOne(id);
    }
    update(id, updateIndicadorDto) {
        return this.indicadorService.update(id, updateIndicadorDto);
    }
    remove(id) {
        return this.indicadorService.remove(id);
    }
};
exports.IndicadorController = IndicadorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Indicador creado.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_indicador_dto_1.CreateIndicadorDto]),
    __metadata("design:returntype", void 0)
], IndicadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de indicadores.' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, filter_indicador_dto_1.FilterIndicadorDto]),
    __metadata("design:returntype", void 0)
], IndicadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Indicador encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IndicadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Indicador actualizado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_indicador_dto_1.UpdateIndicadorDto]),
    __metadata("design:returntype", void 0)
], IndicadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Indicador eliminado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IndicadorController.prototype, "remove", null);
exports.IndicadorController = IndicadorController = __decorate([
    (0, swagger_1.ApiTags)('indicadores'),
    (0, common_1.Controller)('indicadores'),
    __metadata("design:paramtypes", [indicador_service_1.IndicadorService])
], IndicadorController);
//# sourceMappingURL=indicador.controller.js.map