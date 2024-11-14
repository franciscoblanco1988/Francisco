"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoblacionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const indicador_entity_1 = require("../indicador/entities/indicador.entity");
const zona_entity_1 = require("../zona/entities/zona.entity");
const poblacion_controller_1 = require("./poblacion.controller");
const poblacion_service_1 = require("./poblacion.service");
const poblacion_entity_1 = require("./entities/poblacion.entity");
let PoblacionModule = class PoblacionModule {
};
exports.PoblacionModule = PoblacionModule;
exports.PoblacionModule = PoblacionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([poblacion_entity_1.Poblacion, zona_entity_1.Zona, indicador_entity_1.Indicador])],
        controllers: [poblacion_controller_1.PoblacionController],
        providers: [poblacion_service_1.PoblacionService],
    })
], PoblacionModule);
//# sourceMappingURL=poblacion.module.js.map