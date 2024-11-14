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
exports.UnidadDeMedidaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const unidad_medida_service_1 = require("./unidad_medida.service");
const create_unidad_medida_dto_1 = require("./dto/create-unidad_medida.dto");
const update_unidad_medida_dto_1 = require("./dto/update-unidad_medida.dto");
let UnidadDeMedidaController = class UnidadDeMedidaController {
    constructor(unidadDeMedidaService) {
        this.unidadDeMedidaService = unidadDeMedidaService;
    }
    create(createUnidadDeMedidaDto) {
        return this.unidadDeMedidaService.create(createUnidadDeMedidaDto);
    }
    findOne(id) {
        return this.unidadDeMedidaService.findOne(+id);
    }
    update(id, updateUnidadDeMedidaDto) {
        return this.unidadDeMedidaService.update(+id, updateUnidadDeMedidaDto);
    }
    remove(id) {
        return this.unidadDeMedidaService.remove(+id);
    }
};
exports.UnidadDeMedidaController = UnidadDeMedidaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Unidad de medida creada exitosamente.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unidad_medida_dto_1.CreateUnidadDeMedidaDto]),
    __metadata("design:returntype", void 0)
], UnidadDeMedidaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Unidad de medida encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnidadDeMedidaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Unidad de medida actualizada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_unidad_medida_dto_1.UpdateUnidadDeMedidaDto]),
    __metadata("design:returntype", void 0)
], UnidadDeMedidaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Unidad de medida eliminada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnidadDeMedidaController.prototype, "remove", null);
exports.UnidadDeMedidaController = UnidadDeMedidaController = __decorate([
    (0, swagger_1.ApiTags)('unidades-de-medida'),
    (0, common_1.Controller)('unidades-de-medida'),
    __metadata("design:paramtypes", [unidad_medida_service_1.UnidadDeMedidaService])
], UnidadDeMedidaController);
//# sourceMappingURL=unidad_medida.controller.js.map