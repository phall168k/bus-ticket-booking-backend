import { NestFactory } from '@nestjs/core';
import { TripServiceModule } from './trip-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TripServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
