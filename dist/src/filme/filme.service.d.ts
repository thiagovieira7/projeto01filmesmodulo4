import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class FilmeService {
    private prisma;
    constructor(prisma: PrismaService);
    createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme>;
    findAllPrisma(): Promise<Filme[]>;
    findOnePrisma(id: number): Promise<Filme>;
    updatePrisma(id: number, _updateFilmeDto: UpdateFilmeDto): Promise<Filme>;
    removePrisma(id: number): Promise<Filme>;
}
