import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';
import { YahtzyService } from './yahtzy/yahtzy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FizzbuzzService, YahtzyService],
})
export class AppModule {}
