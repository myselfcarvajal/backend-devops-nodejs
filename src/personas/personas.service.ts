import { HttpException, Injectable } from '@nestjs/common';
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
    const persona = await this.prisma.persona.findUnique({
      where: { Id: id },
    });

    if (!persona) throw new HttpException('Persona Not Found', 404);

    return persona;
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    await this.findOne(id);

    const updatedPersona = await this.prisma.persona.update({
      where: { Id: id },
      data: {
        ...updatePersonaDto,
      },
    });
    return updatedPersona;
  }

  remove(id: string) {
    return `This action removes a #${id} persona`;
  }
}
