"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicadorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const servicio_entity_1 = require("../servicio/entities/servicio.entity");
const tipo_indicador_entity_1 = require("../tipo_indicador/entities/tipo_indicador.entity");
const unidad_medida_entity_1 = require("../unidad_medida/entities/unidad_medida.entity");
const poblacion_entity_1 = require("../poblacion/entities/poblacion.entity");
const indicador_controller_1 = require("./indicador.controller");
const indicador_service_1 = require("./indicador.service");
const indicador_entity_1 = require("./entities/indicador.entity");
let IndicadorModule = class IndicadorModule {
};
exports.IndicadorModule = IndicadorModule;
exports.IndicadorModule = IndicadorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([indicador_entity_1.Indicador, tipo_indicador_entity_1.TipoIndicador, servicio_entity_1.Servicio, unidad_medida_entity_1.UnidadDeMedida, poblacion_entity_1.Poblacion]),
        ],
        controllers: [indicador_controller_1.IndicadorController],
        providers: [indicador_service_1.IndicadorService],
    })
], IndicadorModule);
//# sourceMappingURL=indicador.module.js.map