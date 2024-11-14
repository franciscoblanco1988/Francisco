"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespaldoIndicadoresModule = void 0;
const common_1 = require("@nestjs/common");
const respaldo_indicadores_service_1 = require("./respaldo-indicadores.service");
const respaldo_indicadores_controller_1 = require("./respaldo-indicadores.controller");
let RespaldoIndicadoresModule = class RespaldoIndicadoresModule {
};
exports.RespaldoIndicadoresModule = RespaldoIndicadoresModule;
exports.RespaldoIndicadoresModule = RespaldoIndicadoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [respaldo_indicadores_controller_1.RespaldoIndicadoresController],
        providers: [respaldo_indicadores_service_1.RespaldoIndicadoresService],
    })
], RespaldoIndicadoresModule);
//# sourceMappingURL=respaldo-indicadores.module.js.map