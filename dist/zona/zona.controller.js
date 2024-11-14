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
exports.ZonaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const zona_service_1 = require("./zona.service");
const create_zona_dto_1 = require("./dto/create-zona.dto");
const filter_zona_dto_1 = require("./dto/filter-zona.dto");
const update_zona_dto_1 = require("./dto/update-zona.dto");
let ZonaController = class ZonaController {
    constructor(zonaService) {
        this.zonaService = zonaService;
    }
    async create(createZonaDto) {
        return this.zonaService.create(createZonaDto);
    }
    async findAll(filterDto, page = 1, limit = 10) {
        return this.zonaService.findAll(filterDto, page, limit);
    }
    async findOne(id) {
        return this.zonaService.findOne(id);
    }
    async update(id, updateZonaDto) {
        return this.zonaService.update(id, updateZonaDto);
    }
    async remove(id) {
        return this.zonaService.remove(id);
    }
};
exports.ZonaController = ZonaController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Zona creada.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zona_dto_1.CreateZonaDto]),
    __metadata("design:returntype", Promise)
], ZonaController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de zonas.' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_zona_dto_1.FilterZonaDto, Number, Number]),
    __metadata("design:returntype", Promise)
], ZonaController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Zona encontrada.' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ZonaController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Zona actualizada.' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_zona_dto_1.UpdateZonaDto]),
    __metadata("design:returntype", Promise)
], ZonaController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Zona eliminada.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ZonaController.prototype, "remove", null);
exports.ZonaController = ZonaController = __decorate([
    (0, swagger_1.ApiTags)('zona'),
    (0, common_1.Controller)('zona'),
    __metadata("design:paramtypes", [zona_service_1.ZonaService])
], ZonaController);
//# sourceMappingURL=zona.controller.js.map