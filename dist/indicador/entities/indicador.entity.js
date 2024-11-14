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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicador = void 0;
const typeorm_1 = require("typeorm");
const tipo_indicador_entity_1 = require("../../tipo_indicador/entities/tipo_indicador.entity");
const servicio_entity_1 = require("../../servicio/entities/servicio.entity");
const unidad_medida_entity_1 = require("../../unidad_medida/entities/unidad_medida.entity");
const poblacion_entity_1 = require("../../poblacion/entities/poblacion.entity");
const periodicidad_entity_1 = require("../../periodicidad/entities/periodicidad.entity");
let Indicador = class Indicador {
};
exports.Indicador = Indicador;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Indicador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Indicador.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Indicador.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Indicador.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_indicador_entity_1.TipoIndicador, (tipoIndicador) => tipoIndicador.indicadores),
    __metadata("design:type", tipo_indicador_entity_1.TipoIndicador)
], Indicador.prototype, "tipoIndicador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servicio_entity_1.Servicio, (servicio) => servicio.indicadores),
    __metadata("design:type", servicio_entity_1.Servicio)
], Indicador.prototype, "servicio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unidad_medida_entity_1.UnidadDeMedida, (unidadMedida) => unidadMedida.indicadores),
    __metadata("design:type", unidad_medida_entity_1.UnidadDeMedida)
], Indicador.prototype, "unidadDeMedida", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => poblacion_entity_1.Poblacion, poblacion => poblacion.indicadores),
    __metadata("design:type", Array)
], Indicador.prototype, "poblaciones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => periodicidad_entity_1.Periodicidad, periodicidad => periodicidad.indicadores),
    __metadata("design:type", periodicidad_entity_1.Periodicidad)
], Indicador.prototype, "periodicidad", void 0);
exports.Indicador = Indicador = __decorate([
    (0, typeorm_1.Entity)()
], Indicador);
//# sourceMappingURL=indicador.entity.js.map