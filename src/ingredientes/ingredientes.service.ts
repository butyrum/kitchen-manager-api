import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Injectable()
export class IngredientesService {
  constructor(private prisma: PrismaService) {}

  create(createIngredienteDto: CreateIngredienteDto) {
    return this.prisma.ingrediente.create({
      data: createIngredienteDto,
    });
  }

  findAll() {
    return this.prisma.ingrediente.findMany();
  }

  async findOne(id: string) {
    const ingrediente = await this.prisma.ingrediente.findUnique({
      where: { id },
    });

    if (!ingrediente) {
      throw new NotFoundException(`Ingrediente com ID ${id} não encontrado`);
    }
    return ingrediente;
  }

  update(id: string, updateIngredienteDto: UpdateIngredienteDto) {
    return this.prisma.ingrediente.update({
      where: { id },
      data: updateIngredienteDto,
    });
  }

  remove(id: string) {
    return this.prisma.ingrediente.delete({
      where: { id },
    });
  }
}
