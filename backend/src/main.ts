import { NestFactory } from '@nestjs/core';
import ProjectModule from './project.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectModule);
  await app.listen(3000);
}

bootstrap();
