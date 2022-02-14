import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmeController {
    private readonly filmeService;
    constructor(filmeService: FilmeService);
    create(createFilmeDto: CreateFilmeDto): Promise<import(".prisma/client").Filme>;
    findAll(): Promise<import(".prisma/client").Filme[]>;
    findOne(id: string): Promise<import(".prisma/client").Filme>;
    update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<import(".prisma/client").Filme>;
    remove(id: string): Promise<import(".prisma/client").Filme>;
}
