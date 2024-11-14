import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsInt, Min } from 'class-validator';

export class PaginationDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    @Min(1)
    page?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    @Min(1)
    limit?: number;
}