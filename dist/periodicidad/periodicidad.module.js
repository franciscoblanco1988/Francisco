"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodicidadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const periodicidad_controller_1 = require("./periodicidad.controller");
const periodicidad_service_1 = require("./periodicidad.service");
const periodicidad_entity_1 = require("./entities/periodicidad.entity");
let PeriodicidadModule = class PeriodicidadModule {
};
exports.PeriodicidadModule = PeriodicidadModule;
exports.PeriodicidadModule = PeriodicidadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([periodicidad_entity_1.Periodicidad])],
        providers: [periodicidad_service_1.PeriodicidadService],
        controllers: [periodicidad_controller_1.PeriodicidadController],
    })
], PeriodicidadModule);
//# sourceMappingURL=periodicidad.module.js.map