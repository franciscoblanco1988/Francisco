import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita CORS
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Transforma los DTOs automáticamente
    whitelist: true, // Elimina propiedades no definidas en los DTOs
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no permitidas
  }));

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Api Promedio')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(9090);
}
bootstrap();