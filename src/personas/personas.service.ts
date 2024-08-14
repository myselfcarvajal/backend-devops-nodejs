import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonasService {
  constructor(private prisma: PrismaService) {}

  async create(createPersonaDto: CreatePersonaDto) {
    return await this.prisma.persona.create({
      data: {
        ...createPersonaDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.persona.findMany();
  }

  async findOne(id: string) {
    return this.prisma.persona.findUnique({
      where: { Id: id },
    });
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    return await this.prisma.persona.update({
      where: { Id: id },
      data: {
        ...updatePersonaDto,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
