import { Module } from '@nestjs/common';
import { GeneroModule } from './genero/genero.module';
import { ParticipanteModule } from './participante/participante.module';

@Module({
  imports: [GeneroModule, ParticipanteModule],
})
export class AppModule {}
