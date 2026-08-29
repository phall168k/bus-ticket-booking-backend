import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { DatabaseModule } from './database/database.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [DatabaseModule, RabbitmqModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
