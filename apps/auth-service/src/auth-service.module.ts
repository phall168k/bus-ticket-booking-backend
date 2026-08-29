import { DatabaseModule } from '@app/common/database/database.module';
import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule.forRoot('AUTH'),
  ],
  controllers: [],
  providers: [],
})
export class AuthServiceModule implements OnApplicationBootstrap {
  private readonly logger = new Logger(
    AuthServiceModule.name,
  );

  constructor(private readonly dataSource: DataSource) {}

  onApplicationBootstrap() {
    this.logger.log(
      `Database connection: ${
        this.dataSource.isInitialized
        ? 'CONNECTED' 
        : 'DISCONNECTED'
      }`
    )
  }
}
