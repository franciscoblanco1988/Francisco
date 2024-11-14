import { IsString, IsOptional } from 'class-validator';

export class UpdateZonaDto {
  @IsString()
  @IsOptional()
  descripcion?: string;
}
