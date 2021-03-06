/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_lancamnto: string;

  @IsNotEmpty()
  @IsInt()
  tempo_duracao: number;

  @IsNotEmpty()
  @IsInt()
  generoid: number;
}
