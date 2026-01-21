import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceitasService {
  constructor(private prisma: PrismaService) {}

  async create(createReceitaDto: CreateReceitaDto) {
    return this.prisma.receita.create({
      data: {
        nome: createReceitaDto.nome,
        modoPreparo: createReceitaDto.modoPreparo,
        rendimento: createReceitaDto.rendimento,
        unidade: createReceitaDto.unidade,
      },
    });
  }

  findAll() {
    return this.prisma.receita.findMany();
  }

  findOne(id: string) {
    return this.prisma.receita.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return `This action updates a #${id} receita`;
  }

  remove(id: number) {
    return `This action removes a #${id} receita`;
  }
}
