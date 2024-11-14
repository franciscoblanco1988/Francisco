import { IsString, IsNotEmpty } from 'class-validator';

export class CreateZonaDto {
    @IsString()
    @IsNotEmpty()
    descripcion: string;
}
