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
exports.RespaldoIndicadoresController = void 0;
const common_1 = require("@nestjs/common");
const respaldo_indicadores_service_1 = require("./respaldo-indicadores.service");
const create_respaldo_indicadore_dto_1 = require("./dto/create-respaldo-indicadore.dto");
const update_respaldo_indicadore_dto_1 = require("./dto/update-respaldo-indicadore.dto");
let RespaldoIndicadoresController = class RespaldoIndicadoresController {
    constructor(respaldoIndicadoresService) {
        this.respaldoIndicadoresService = respaldoIndicadoresService;
    }
    create(createRespaldoIndicadoreDto) {
        return this.respaldoIndicadoresService.create(createRespaldoIndicadoreDto);
    }
    findAll() {
        return this.respaldoIndicadoresService.findAll();
    }
    findOne(id) {
        return this.respaldoIndicadoresService.findOne(+id);
    }
    update(id, updateRespaldoIndicadoreDto) {
        return this.respaldoIndicadoresService.update(+id, updateRespaldoIndicadoreDto);
    }
    remove(id) {
        return this.respaldoIndicadoresService.remove(+id);
    }
};
exports.RespaldoIndicadoresController = RespaldoIndicadoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_respaldo_indicadore_dto_1.CreateRespaldoIndicadoreDto]),
    __metadata("design:returntype", void 0)
], RespaldoIndicadoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RespaldoIndicadoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RespaldoIndicadoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_respaldo_indicadore_dto_1.UpdateRespaldoIndicadoreDto]),
    __metadata("design:returntype", void 0)
], RespaldoIndicadoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RespaldoIndicadoresController.prototype, "remove", null);
exports.RespaldoIndicadoresController = RespaldoIndicadoresController = __decorate([
    (0, common_1.Controller)('respaldo-indicadores'),
    __metadata("design:paramtypes", [respaldo_indicadores_service_1.RespaldoIndicadoresService])
], RespaldoIndicadoresController);
//# sourceMappingURL=respaldo-indicadores.controller.js.map