import { IsOptional, IsString } from 'class-validator';

export class FilterZonaDto {
  @IsOptional()
  @IsString()
  descripcion?: string;
}