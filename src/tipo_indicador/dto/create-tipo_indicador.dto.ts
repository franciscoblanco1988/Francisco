import { IsString } from 'class-validator'

export class CreateTipoIndicadorDto {
    @IsString()
    descripcion: string;
}
