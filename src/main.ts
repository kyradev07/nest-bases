import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //This global configuration will be applied to all the controllers, without having to add it to each controller
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,//Only accepts the properties that are defined in the DTO, otherwise them will be deleted
            forbidNonWhitelisted: true,//Will throw an error if the DTO has properties that are not defined in it
        })
    )


    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
