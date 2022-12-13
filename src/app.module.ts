import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './Login/login.controller';
import { RegistrationController } from './registration/registration.controller';


@Module({
  imports: [],
  controllers: [AppController,LoginController,RegistrationController],
  providers: [AppService],
})
export class AppModule {}
