import { IsOptional, IsString } from 'class-validator';

export class FilterUnidadDeMedidaDto {
  @IsOptional()
  @IsString()
  descripcion?: string;
}