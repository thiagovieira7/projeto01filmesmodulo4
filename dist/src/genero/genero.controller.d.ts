import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroController {
    private readonly generoService;
    constructor(generoService: GeneroService);
    create(createGeneroDto: CreateGeneroDto): Promise<import(".prisma/client").Genero>;
    findAll(): Promise<import(".prisma/client").Genero[]>;
    findOne(id: string): Promise<import(".prisma/client").Genero>;
    update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<import(".prisma/client").Genero>;
    remove(id: string): Promise<import(".prisma/client").Genero>;
}
