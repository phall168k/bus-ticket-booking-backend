import { ConfigService } from "@nestjs/config";
import {
  RmqOptions,
  Transport,
} from '@nestjs/microservices';

export function getRabbitMqqUrl(
    configService: ConfigService
): string {
    const host = configService.getOrThrow<string>('RABBITMQ_HOST');
    const port = configService.getOrThrow<number>('RABBITMQ_PORT');
    const username = encodeURIComponent(configService.getOrThrow<string>('RABBITMQ_USERNAME'));
    const password = encodeURIComponent(configService.getOrThrow<string>('RABBITMQ_PASSWORD'));

    return `amqp://${username}:${password}@${host}:${port}`;
}

export function getRmqServerOptions(
    configService: ConfigService,
    queue: string,
): RmqOptions {
    return {
        transport: Transport.RMQ,
        options: {
            urls: [
                getRabbitMqqUrl(configService),
            ],
            queue,
            queueOptions: {
                durable: true,
            },
            noAck: false,
            prefetchCount: 10,
        }
    }
}