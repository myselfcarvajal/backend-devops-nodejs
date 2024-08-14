import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

import { Sexo, TipoIdentificacion } from '@prisma/client';

export class UpdatePersonaDto {
  @IsEnum(TipoIdentificacion)
  @IsNotEmpty()
  TipoIdentificacion: TipoIdentificacion;

  @IsString()
  @IsNotEmpty()
  Primer_nombre: string;

  @IsString()
  @IsOptional()
  Segundo_nombre?: string;

  @IsString()
  @IsNotEmpty()
  Primer_apellido: string;

  @IsString()
  @IsOptional()
  Segundo_apellido?: string;

  @IsEnum(Sexo)
  @IsNotEmpty()
  Sexo: Sexo;

  @IsDateString()
  @IsNotEmpty()
  Fecha_nacimiento: string;
}

// export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {}
