import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

@Module({})
export class DatabaseModule {
    static forRoot(prefix: string): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    inject: [ConfigService],
                    useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
                        type: 'postgres',
                        host: configService.getOrThrow<string>(`DB_${prefix}_HOST`),
                        port: configService.getOrThrow<number>(`DB_${prefix}_PORT`),
                        username: configService.getOrThrow<string>('DB_USERNAME'),
                        password: configService.getOrThrow<string>('DB_PASSWORD'),
                        database: configService.getOrThrow<string>(`DB_${prefix}_NAME`),
                        autoLoadEntities: true,
                        synchronize: configService.get<string>('DB_SYNCHRONIZE') === 'true',
                        logging: configService.get<string>('DB_LOGGING') === 'true',
                    }),
                }),
            ],

            exports: [TypeOrmModule],
        };
    }
}
