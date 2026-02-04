import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredienteDto {
  @ApiProperty({ example: 'Leite Condensado 395g' })
  @IsString()
  @IsNotEmpty({ message: 'O nome do ingrediente é obrigatório' })
  nome: string;

  @ApiProperty({ example: 7.5 })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  @Min(0.01, { message: 'O preço deve ser maior que zero' })
  precoAtual: number;

  @ApiProperty({ example: 'un' })
  @IsString()
  @IsNotEmpty()
  unidadeMedida: string;
}
