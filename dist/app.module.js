"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const indicador_module_1 = require("./indicador/indicador.module");
const poblacion_module_1 = require("./poblacion/poblacion.module");
const respaldo_indicadores_module_1 = require("./respaldo-indicadores/respaldo-indicadores.module");
const servicio_module_1 = require("./servicio/servicio.module");
const tipo_indicador_module_1 = require("./tipo_indicador/tipo_indicador.module");
const unidad_medida_module_1 = require("./unidad_medida/unidad_medida.module");
const zona_module_1 = require("./zona/zona.module");
const periodicidad_module_1 = require("./periodicidad/periodicidad.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DB_TYPE,
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                synchronize: true,
            }),
            indicador_module_1.IndicadorModule,
            tipo_indicador_module_1.TipoIndicadorModule,
            servicio_module_1.ServicioModule,
            unidad_medida_module_1.UnidadDeMedidaModule,
            poblacion_module_1.PoblacionModule,
            zona_module_1.ZonaModule,
            respaldo_indicadores_module_1.RespaldoIndicadoresModule,
            periodicidad_module_1.PeriodicidadModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map