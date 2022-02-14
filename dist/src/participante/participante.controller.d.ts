import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipanteController {
    private readonly participanteService;
    constructor(participanteService: ParticipanteService);
    create(createParticipanteDto: CreateParticipanteDto): Promise<Participante>;
    findAll(): Promise<Participante[]>;
    findOne(id: string): Promise<Participante>;
    update(id: string, updateParticipanteDto: UpdateParticipanteDto): Promise<Participante>;
    remove(id: string): Promise<any>;
}
