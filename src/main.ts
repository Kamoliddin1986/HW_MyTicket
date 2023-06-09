import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from '@nestjs/common';

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule)
    const PORT = process.env.PORT

    app.useGlobalPipes(new ValidationPipe())
    
    const config = new DocumentBuilder()
    .setTitle('My Ticket')
    .setDescription('Home work')
    .setVersion('1.0.0')
    .addTag('NodeJS, NestJS, Postgres, sequalize')
    .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/api/docs', app, document)

    app.listen(PORT, ()=> {
        console.log(`Server is running on ${PORT}`);
        
    });
    } catch (error) {
        console.log(error);        
    }    
}

start();