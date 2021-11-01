import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = parseInt(process.env.PORT);

async function bootstrap() {
  if (!port) {
    throw new Error('PORT env variable not set!');
  }
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
