import { Controller,Header,Body,Get, Param, Post,Render,Res,Redirect} from '@nestjs/common';
import { AppService } from '../app.service';
import { Response } from 'express';
import{RegistrationDTO} from '../registration/registration.dto';
import * as fs from 'fs';

@Controller()
export class RegistrationController{
    

constructor(public AppService:AppService){

 }
  @Post('/signup')
  @Render('signup')
  @Header('Content-Type', 'application/json')
  submit1(@Body() data :RegistrationDTO, @Res() res:Response){
    console.log(data);
    this.AppService.registerUser(data);
    res.status(200);
    res.setHeader('Content-Type', 'text/html');  
    return res.render('signup',{err_msg1: "Registration success",title: 'Registration Page'}); 
    
}
}