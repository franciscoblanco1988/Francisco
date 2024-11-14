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
exports.Poblacion = void 0;
const typeorm_1 = require("typeorm");
const indicador_entity_1 = require("../../indicador/entities/indicador.entity");
const zona_entity_1 = require("../../zona/entities/zona.entity");
let Poblacion = class Poblacion {
};
exports.Poblacion = Poblacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Poblacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Poblacion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Poblacion.prototype, "codigoINE", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zona_entity_1.Zona, (zona) => zona.poblaciones),
    __metadata("design:type", zona_entity_1.Zona)
], Poblacion.prototype, "zona", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => indicador_entity_1.Indicador, (indicador) => indicador.poblaciones),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Poblacion.prototype, "indicadores", void 0);
exports.Poblacion = Poblacion = __decorate([
    (0, typeorm_1.Entity)()
], Poblacion);
//# sourceMappingURL=poblacion.entity.js.map