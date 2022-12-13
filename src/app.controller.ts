import { Controller,Header,Body,Get, Param, Post,Render,Res,Redirect} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDTO } from './Login/login.dto';
import { Response } from 'express';
import{RegistrationDTO} from './registration/registration.dto';


@Controller()

export class AppController {

  constructor(private readonly appService: AppService ) {
  
  }
  
  @Get('/login')
  @Render('login')
  login() {
    return { title: 'Login Page' };
  }
  @Get('/signup')
  @Render('signup')
  signup() {
    return { title: 'Registration Page' };
  }
  @Get('/')
  @Render('index')
  welcome() {
    return { title: 'Home Page' };
   
  }
  
}

