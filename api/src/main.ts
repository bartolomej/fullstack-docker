import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = parseInt(process.env.PORT);

async function bootstrap() {
  if (!port) {
    console.error('PORT env variable not set!');
  }
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors();
  await app.listen(port);
}
bootstrap();
