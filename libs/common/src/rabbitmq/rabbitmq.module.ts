import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RMQ_QUEUES } from './rabbitmq.constants';
import { ConfigService } from '@nestjs/config';
import { getRabbitMqqUrl } from './rabbitmq.config';

@Module({
    imports: [
        ClientsModule.registerAsync([
            {
                name: RMQ_QUEUES.AUTH,
                inject: [ConfigService],
                useFactory: (configService: ConfigService) => ({
                    transport: Transport.RMQ,
                    options: {
                        urls: [getRabbitMqqUrl(configService)],
                        queue: RMQ_QUEUES.AUTH,
                        queueOptions: {
                            durable: true,
                        },
                    },
                }),
            },
            {
                name: RMQ_QUEUES.TRIP,
                inject: [ConfigService],
                useFactory: (configService: ConfigService) => ({
                    transport: Transport.RMQ,
                    options: {
                        urls: [getRabbitMqqUrl(configService)],
                        queue: RMQ_QUEUES.TRIP,
                        queueOptions: {
                            durable: true,
                        },
                    },
                }),
            },
            {
                name: RMQ_QUEUES.BOOKING,
                inject: [ConfigService],
                useFactory: (configService: ConfigService) => ({
                    transport: Transport.RMQ,
                    options: {
                        urls: [getRabbitMqqUrl(configService)],
                        queue: RMQ_QUEUES.BOOKING,
                        queueOptions: {
                            durable: true,
                        },
                    },
                }),
            },
            {
                name: RMQ_QUEUES.PAYMENT,
                inject: [ConfigService],
                useFactory: (configService: ConfigService) => ({
                    transport: Transport.RMQ,
                    options: {
                        urls: [getRabbitMqqUrl(configService)],
                        queue: RMQ_QUEUES.PAYMENT,
                        queueOptions: {
                            durable: true,
                        },
                    },
                }),
            },
            {
                name: RMQ_QUEUES.NOTIFICATION,
                inject: [ConfigService],
                useFactory: (configService: ConfigService) => ({
                    transport: Transport.RMQ,
                    options: {
                        urls: [getRabbitMqqUrl(configService)],
                        queue: RMQ_QUEUES.NOTIFICATION,
                        queueOptions: {
                            durable: true,
                        },
                    },
                }),
            },
        ])
    ],
    exports: [ClientsModule],
})
export class RabbitmqModule {}
