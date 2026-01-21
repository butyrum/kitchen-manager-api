import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReceitasModule } from './receitas/receitas.module';

@Module({
  imports: [PrismaModule, ReceitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
