import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BonvinoModule } from './bonvino/bonvino.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/mapeodocumental'), BonvinoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
