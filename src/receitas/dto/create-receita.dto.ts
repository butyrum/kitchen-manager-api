import { IsString, IsInt, IsNotEmpty, MinLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateReceitaDto {
  @ApiProperty({ example: 'Bolo de Cenoura' })
  @IsString()
  @IsNotEmpty({ message: 'O nome da receita e obrigatorio' })
  nome: string;

  @ApiProperty({ example: 'Misture os ingredientes...' })
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'O modo de preparo precisa ser mais detalhado' })
  modoPreparo: string;
  @ApiProperty({ example: 40 })
  @IsInt()
  @Min(1)
  tempoPreparo: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  rendimento: number;

  @ApiProperty({ example: 'unidades' })
  @IsString()
  @IsNotEmpty()
  unidade: string;
}
