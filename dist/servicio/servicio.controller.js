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
exports.ServicioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const servicio_service_1 = require("./servicio.service");
const create_servicio_dto_1 = require("./dto/create-servicio.dto");
const update_servicio_dto_1 = require("./dto/update-servicio.dto");
let ServicioController = class ServicioController {
    constructor(servicioService) {
        this.servicioService = servicioService;
    }
    create(createServicioDto) {
        return this.servicioService.create(createServicioDto);
    }
    findAll(page, limit) {
        return this.servicioService.findAll(page, limit);
    }
    findOne(id) {
        return this.servicioService.findOne(+id);
    }
    update(id, updateServicioDto) {
        return this.servicioService.update(+id, updateServicioDto);
    }
    remove(id) {
        return this.servicioService.remove(+id);
    }
};
exports.ServicioController = ServicioController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio creado.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_dto_1.CreateServicioDto]),
    __metadata("design:returntype", void 0)
], ServicioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de Servicios.' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ServicioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_servicio_dto_1.UpdateServicioDto]),
    __metadata("design:returntype", void 0)
], ServicioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicioController.prototype, "remove", null);
exports.ServicioController = ServicioController = __decorate([
    (0, swagger_1.ApiTags)('servicio'),
    (0, common_1.Controller)('servicios'),
    __metadata("design:paramtypes", [servicio_service_1.ServicioService])
], ServicioController);
//# sourceMappingURL=servicio.controller.js.map