import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AuthServiceModule } from './auth-service.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getRmqServerOptions } from '@app/common/rabbitmq/rabbitmq.config';
import { RMQ_QUEUES } from '@app/common/rabbitmq/rabbitmq.constants';

async function bootstrap() {
  
  const logger = new Logger('AuthService');



  const app = await NestFactory.create(
    AuthServiceModule,
  );
  const configService = app.get(ConfigService);
  const rmqServer = app.connectMicroservice(
    getRmqServerOptions(
      configService,
      RMQ_QUEUES.AUTH,
    ),
  );

  rmqServer.status.subscribe(
    (status) => {
      logger.log(
        `RabbitMQ status: ${status}`,
      );
    },
  );

  await app.init();
  await app.startAllMicroservices();
  logger.log(`Auth service listening on ${RMQ_QUEUES.AUTH}`);
}
bootstrap();