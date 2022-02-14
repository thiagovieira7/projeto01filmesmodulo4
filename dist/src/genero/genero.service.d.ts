import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    createPrisma(createGeneroDto: CreateGeneroDto): Promise<Genero>;
    findAllPrisma(): Promise<Genero[]>;
    findOnePrisma(id: number): Promise<Genero>;
    updatePrisma(id: number, _updateGeneroDto: UpdateGeneroDto): Promise<Genero>;
    removePrisma(id: number): Promise<Genero>;
}
