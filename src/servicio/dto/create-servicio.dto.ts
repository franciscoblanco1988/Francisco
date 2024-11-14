import { IsString, IsNotEmpty } from 'class-validator';

export class CreateServicioDto {
    @IsString()
    @IsNotEmpty()
    nombre_servicio: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}

